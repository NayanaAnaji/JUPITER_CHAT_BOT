import { type FC, type HTMLAttributes } from "react";

import { tw } from "@/utils/lib";

interface ICustomError extends HTMLAttributes<HTMLSpanElement> {
  error: string;
  touched: boolean;
  className?: string;
}

const CustomError: FC<ICustomError> = (props) => {
  const { error, touched, className, ...rest } = props;

  return error && touched ? (
    <span
      className={tw("mt-1 block text-xs text-red-500", className)}
      {...rest}
    >
      {error}
    </span>
  ) : (
    <></>
  );
};

export default CustomError;
