import { FC } from "react";
import CustomDottedLoader from "../custom/custom-dotted-loader";

interface IBodyProps {
    inputText: string[];
    onFocus: boolean
}
const Body: FC<IBodyProps> = (props) => {
    const { inputText, onFocus } = props;
    return (
        <div className="p-2 flex flex-col h-full w-full">
            <div className="flex flex-col justify-end flex-1 ">
                {inputText.map((text, index) => (
                    <span
                        key={index}
                        className="border p-2 bg-slate-50 text-black rounded-xl shadow-lg mb-2 max-w-[80%] self-start break-words"
                    >
                        {text}
                    </span>
                ))}
            </div>
            <div className="mt-auto flex ">
                {onFocus && <>
                    <CustomDottedLoader />
                </>}
            </div >
        </div >
    )
}

export default Body
