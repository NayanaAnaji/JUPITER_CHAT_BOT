import { useId, type FC } from "react";

import { Input, type InputProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";

interface ICustomPasswordInputProps extends InputProps {
  label?: string;
  error?: string;
  required?: boolean;
  infoTxt?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomPasswordInput: FC<ICustomPasswordInputProps> = (props) => {
  const {
    label = "",
    error = "",
    touched = false,
    required = false,
    className,
    infoTxt = "",
    wrapperClassName = "",
    ...rest
  } = props;
  const inputId = useId();

  return (
    <div className={wrapperClassName}>
      <CustomLabel
        htmlFor={inputId}
        label={label}
        required={required}
        infoTxt={infoTxt}
      />
      <Input.Password
        id={inputId}
        className={tw("my-1", className)}
        {...rest}
      />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomPasswordInput;
