import { Minus, X } from "lucide-react"
import { Dispatch, FC, SetStateAction } from "react";

interface IChatHeader {
    setOpenMessageScreen: Dispatch<SetStateAction<boolean>>
}
const ChatHeader:FC<IChatHeader> = (props) => {
    const {setOpenMessageScreen} =props;
    return (
        <div className="flex justify-end  text-black gap-2  pr-2 h-10 items-center">
            <Minus width={15} className="cursor-pointer" onClick={()=>setOpenMessageScreen(false)}/>
            <X width={15} className="cursor-pointer" onClick={()=>setOpenMessageScreen(false)}/>
        </div>
    )
}

export default ChatHeader;
