import { type FC } from "react";

import { Button } from "antd";

import { MoveLeft } from "lucide-react";

import Text from "@/components/common/text";
import { useData } from "@/hooks/context-hooks";


const NotFound: FC = () => {
  const { navigate } = useData();

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <img
        src="/src/assets/not-found-bg.jpg"
        alt="not found background"
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-xs"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-primary to-white/20 dark:from-black dark:to-transparent" />
      <div className="flex-center absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <Text.h1 className="bg-gradient-to-t from-gray-300 to-white bg-clip-text font-mono text-transparent lg:text-9xl">
          PAGE NOT FOUND
        </Text.h1>
        <Button
          type="dashed"
          className="mt-10"
          onClick={() => navigate(-1)}
          icon={<MoveLeft />}
        >
          Navigate Back
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
