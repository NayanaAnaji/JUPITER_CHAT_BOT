import { Minus, X } from "lucide-react"

const Header = () => {
    return (
        <div className="flex justify-end  text-black gap-2  pr-2 h-10 items-center">
            <Minus width={15} />
            <X width={15} />
        </div>
    )
}

export default Header
