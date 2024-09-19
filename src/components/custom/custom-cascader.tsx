import { type FC, useId } from "react";

import { Cascader, type CascaderProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";

interface ICustomCascadeprops extends CascaderProps {
  label?: string;
  required?: boolean;
  infoTxt?: string;
  error?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomCascade: FC<ICustomCascadeprops> = (props) => {
  const {
    label = "",
    required = false,
    touched = false,
    infoTxt = "",
    wrapperClassName = "",
    error = "",
    ...rest
  } = props;
  const cascadeId = useId();

  return (
    <div className={tw("flex flex-col", wrapperClassName)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={cascadeId}
      />
      <Cascader id={cascadeId} {...rest} />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomCascade;
