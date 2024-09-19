import { useId, type FC } from "react";

import { InputNumber, type InputNumberProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";

interface ICustomNumberInput extends InputNumberProps {
  label?: string;
  required?: boolean;
  infoTxt?: string;
  error?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomNumberInput: FC<ICustomNumberInput> = (props) => {
  const {
    label = "",
    required = false,
    touched = false,
    infoTxt = "",
    error = "",
    wrapperClassName = "",
    ...rest
  } = props;
  const numInputId = useId();

  return (
    <div className={tw("flex flex-col", wrapperClassName)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={numInputId}
      />
      <InputNumber
        id={numInputId}
        {...rest}
        className={tw("w-full", rest.className)}
      />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomNumberInput;
