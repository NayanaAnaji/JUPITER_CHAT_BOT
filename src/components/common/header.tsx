import { Minus, X } from "lucide-react";
import { FC } from "react";

interface IHeaderProps {
    setOpenMessageScreen: (text: boolean) => void
}

const Header: FC<IHeaderProps> = ({ setOpenMessageScreen }) => {
    return (
        <div className="flex justify-end  text-black gap-2  pr-2 h-10 items-center">
            <Minus width={15} />
            <X width={15} onClick={() => setOpenMessageScreen(false)} className="cursor-pointer" />
        </div>
    )
}

export default Header
