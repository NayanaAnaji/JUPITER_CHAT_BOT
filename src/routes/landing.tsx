import ChatbotScreen from "@/components/common/chatbotScreen";
import { BotMessageSquare } from "lucide-react";
import { useState, type FC } from "react";

const Landing: FC = () => {
  const [openMessageScreen, setOpenMessageScreen] = useState(false);
  return (<>
    <div className="flex justify-end h-full items-end">
      {openMessageScreen === false && <BotMessageSquare height={35} width={35} onClick={() => setOpenMessageScreen(true)} />}
      {openMessageScreen && <ChatbotScreen />}
    </div >
  </>)
};

export default Landing;
