import { useState } from "react"
import Body from "./body"
import Footer from "./footer"
import Header from "./header"

const ChatbotScreen = () => {
    const [inputText, setInputText] = useState<string[]>([]);;
    const [onFocus, setOnFocus] = useState(false)
    console.log(onFocus, "onFocus")
    console.log(inputText, "input text")
    return (
        <div className="md:w-[350px] md:h-[600px] w-full h-full border  rounded-lg flex flex-col shadow-xl z-10 bg-gr-bot ">
            <div className="h-18  rounded-t">
                <Header />
            </div>
            <div className="flex-1 overflow-auto">
                <Body inputText={inputText} onFocus={onFocus} />
            </div>
            <div className="h-16 border-t border-gray-300 bg-white  " >
                <Footer setInputText={setInputText} setOnFocus={setOnFocus} />
            </div>
        </div>
    )
}

export default ChatbotScreen
