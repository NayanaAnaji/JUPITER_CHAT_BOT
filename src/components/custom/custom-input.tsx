import { useId, type FC } from "react";

import { Input, type InputProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";

interface ICustomInputProps extends InputProps {
  label?: string;
  error?: string;
  required?: boolean;
  infoTxt?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomInput: FC<ICustomInputProps> = (props) => {
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
    <div className={tw("flex flex-col", wrapperClassName)}>
      <CustomLabel
        htmlFor={inputId}
        label={label}
        required={required}
        infoTxt={infoTxt}
      />
      <Input id={inputId} allowClear {...rest} className={className} />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomInput;
