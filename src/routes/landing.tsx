import ChatScreen from "@/components/common/chat-screen";
import SpeechToText from "@/components/common/speech-to-text";
import { BotMessageSquare } from "lucide-react";
import { useState, type FC } from "react";

const Landing: FC = () => {
  const [openMessageScreen, setOpenMessageScreen] = useState<boolean>(false);
  return (<>
      <SpeechToText/>
    <div className="flex justify-end h-full items-end">
      {openMessageScreen === false && <div className="rounded-full p-3 bg-primary-blue cursor-pointer text-white"><BotMessageSquare height={35} width={35} onClick={() => setOpenMessageScreen(true)} /></div>}
      {openMessageScreen && <ChatScreen setOpenMessageScreen={setOpenMessageScreen} />}
    </div >
  </>)
};

export default Landing;
