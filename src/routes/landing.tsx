import ChatScreen from "@/components/common/chat-screen";
import { BotMessageSquare } from "lucide-react";
import { useState, type FC } from "react";

const Landing: FC = () => {
  const [openMessageScreen, setOpenMessageScreen] = useState<boolean>(false);
  return (<>
    <div className="flex justify-end h-full items-end">
      {openMessageScreen === false && <div className="rounded-full p-4 bg-primary-blue cursor-pointer text-white"><BotMessageSquare height={35} width={35} onClick={() => setOpenMessageScreen(true)} /></div>}
      {openMessageScreen && <ChatScreen setOpenMessageScreen={setOpenMessageScreen}/>}
    </div >
  </>)
};

export default Landing;
