import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react'; // Mic icons
import axios, { AxiosError } from 'axios'; // Import AxiosError

const SpeechToText: React.FC = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<string>('');
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]); // To store audio data

  useEffect(() => {
    const requestMicrophonePermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunks.current.push(event.data);
          }
        };

        setMediaRecorder(recorder);
      } catch (error) {
        console.error('Error accessing the microphone', error);
      }
    };

    requestMicrophonePermission();
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      audioChunks.current = []; // Clear previous recordings
      mediaRecorder.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks.current, { type: 'audio/webm' });
        const base64Audio = await blobToBase64(audioBlob);
        console.log('Base64 Audio Content:', base64Audio); // Log Base64 audio
        sendToGoogleAPI(base64Audio);
      };
    }
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result?.toString().split(',')[1]; // Extract base64 part
        if (base64data) {
          resolve(base64data);
        } else {
          reject('Failed to convert blob to base64');
        }
      };
      reader.onerror = (error) => reject(error); // Handle reading errors
    });
  };

  const sendToGoogleAPI = async (audioContent: string) => {
    const apiKey = 'AIzaSyC90EcO4dOvwgyKE2GkXivAZ0MZ0AOI3sc'; // Replace with your actual API key
  
    const request = {
      audio: {
        content: audioContent, // Base64 audio data
      },
      config: {
        encoding: 'WEBM_OPUS', // Ensure this matches the audio format
        sampleRateHertz: 48000, // Change to match the actual sample rate of your recording
        languageCode: 'en-IN',
      },
    };  
    try {
      const response = await axios.post(
        `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`,
        request
      );
  
      // Handle the response
      if (response.data.results && response.data.results.length > 0) {
        setTranscript(response.data.results[0].alternatives[0].transcript);
      } else {
        console.log('No transcription results found');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error sending audio to Google API', axiosError.message);
      if (axiosError.response) {
        console.error('Response data:', axiosError.response.data);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };
  

  return (
    <div>
      <h1>Speech to Text</h1>
      <div>
        {isRecording ? (
          <MicOff size={48} color="red" onClick={stopRecording} style={{ cursor: 'pointer' }} />
        ) : (
          <Mic size={48} color="green" onClick={startRecording} style={{ cursor: 'pointer' }} />
        )}
      </div>
      <h2>Transcription:</h2>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
