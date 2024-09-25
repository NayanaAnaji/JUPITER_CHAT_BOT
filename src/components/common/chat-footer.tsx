import { Mic, SendHorizontal } from "lucide-react"
import { useState } from "react";
import { FC } from "react";

interface IFooterProps {
    setInputText: (text: string[] | ((prev: string[]) => string[])) => void;
    setOnFocus: (text: boolean) => void;
}

const ChatFooter: FC<IFooterProps> = (props) => {
    const { setInputText, setOnFocus } = props
    const [inputValue, setInputValue] = useState("");
    const [typingTimeout, setTypingTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
        setOnFocus(true);
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }
        const timeout = setTimeout(() => {
            setOnFocus(false);
        }, 1000);

        setTypingTimeout(timeout);

    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            handleInput(e as any);
            setInputText((prev) => [...prev, inputValue]);
            setInputValue("");
        }
    };
    return (
        <div className="h-full flex items-center ml-2 justify-between gap-2">
            <textarea className="border-none flex justify-center focus:outline-none w-full"
                placeholder="Type your question here"
                onChange={handleInput}
                value={inputValue}
                onKeyDown={handleKeyDown}
            />
            <div className="flex gap-2 mr-3 text-gray-600">
                <SendHorizontal onClick={() => {
                    setInputText((prev) => [...prev, inputValue]);
                    setInputValue("");
                }}
                    className="cursor-pointer"
                    width={17} />
                <Mic width={17} />
            </div>
        </div>
    )
}

export default ChatFooter;
