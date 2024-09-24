import { FC } from "react";
import CustomDottedLoader from "../custom/custom-dotted-loader";

interface IBodyProps {
    inputText: string[];
    onFocus: boolean
}
const ChatBody: FC<IBodyProps> = (props) => {
    const { inputText, onFocus } = props;
    return (
        <div className="p-2 flex flex-col h-full w-full">
            <div className="flex flex-col justify-end flex-1 items-end w-full">
                {inputText.map((text, index) => (
                    text &&
                    <span
                        key={index}
                        className="border p-2 bg-slate-50 text-primary-gray rounded-xl shadow-lg mb-2 max-w-[80%] break-words font-[500px] text-sm "
                    >
                        {text}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex">
                {onFocus && <>
                    <CustomDottedLoader />
                </>}
            </div >
        </div >
    )
}

export default ChatBody;
