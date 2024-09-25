import { Dispatch, FC, SetStateAction, useState } from "react"

import ChatBody from "./chat-body";
import ChatFooter from "./chat-footer";
import ChatHeader from "./chat-header";
import { useEffect } from "react";
import { useRef } from "react";

interface IChatScreen {
    setOpenMessageScreen: Dispatch<SetStateAction<boolean>>
}
const ChatScreen: FC<IChatScreen> = ({ setOpenMessageScreen }) => {
    const [inputText, setInputText] = useState<string[]>([]);;
    const [onFocus, setOnFocus] = useState(false)
    const scrollRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [inputText]);

    return (
        <div className="md:w-[350px] md:h-[600px] w-full h-full border  rounded-lg flex flex-col shadow-xl z-10 bg-gr-bot ">
            <div className="h-18  rounded-t">
                <ChatHeader setOpenMessageScreen={setOpenMessageScreen} />
            </div>
            <div className="flex-1 overflow-auto custom-scrollbar flex items-end" ref={scrollRef}>
                <ChatBody inputText={inputText} onFocus={onFocus} />
            </div>
            <div className="h-16 border-t border-gray-300 bg-white  " >
                <ChatFooter setInputText={setInputText} setOnFocus={setOnFocus} />
            </div>
        </div>
    )
}

export default ChatScreen;
