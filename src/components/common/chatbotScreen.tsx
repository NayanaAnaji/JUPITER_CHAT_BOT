import { useState } from "react"
import Body from "./body"
import Footer from "./footer"
import Header from "./header"
import { FC } from "react"
import { useEffect } from "react"
import { useRef } from "react"

interface IChatbotScreenProps {
    setOpenMessageScreen: (text: boolean) => void
}

const ChatbotScreen: FC<IChatbotScreenProps> = ({ setOpenMessageScreen }) => {
    const [inputText, setInputText] = useState<string[]>([]);;
    const [onFocus, setOnFocus] = useState(false)
    const scrollRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        console.log(scrollRef.current, "testdjsiodlfn")
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [inputText]);
    return (
        <div className="md:w-[350px] md:h-[600px] w-full h-full border  rounded-lg flex flex-col shadow-xl z-10 bg-gr-bot ">
            <div className="h-18  rounded-t">
                <Header setOpenMessageScreen={setOpenMessageScreen} />
            </div>
            <div className="flex-1 overflow-auto custom-scrollbar" ref={scrollRef}>
                <Body inputText={inputText} onFocus={onFocus} />
            </div>
            <div className="h-16 border-t border-gray-300 bg-white  " >
                <Footer setInputText={setInputText} setOnFocus={setOnFocus} />
            </div>
        </div>
    )
}

export default ChatbotScreen
