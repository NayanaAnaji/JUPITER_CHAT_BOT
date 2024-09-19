import { FC, HTMLAttributes, memo } from "react";

import Text from "@/components/common/text";
import { tw } from "@/utils/lib";

interface ICustomCardProps extends HTMLAttributes<HTMLDivElement> {
  header?: string;
  wrapperClassName?: string;
}

const CustomCard: FC<ICustomCardProps> = (props) => {
  const { className, wrapperClassName, header, children, ...rest } = props;

  return (
    <section
      className={tw("bg-white shadow dark:border dark:border-white/10 dark:bg-dark", wrapperClassName)}
      {...rest}>
      {header && (
        <div className="border-b p-4 dark:border-white/10">
          <Text.sm className="text-dark dark:text-gray-100">{header}</Text.sm>
        </div>
      )}
      <div className={tw("p-4", className)}>{children}</div>
    </section>
  );
};

export default memo(CustomCard);
