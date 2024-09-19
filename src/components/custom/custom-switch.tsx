import { useId, type FC } from "react";

import { Switch, type SwitchProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";

interface ICustomSwitchProps extends SwitchProps {
  label?: string;
  required?: boolean;
  infoTxt?: string;
  error?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomSwitch: FC<ICustomSwitchProps> = (props) => {
  const {
    label = "",
    required = false,
    touched = false,
    infoTxt = "",
    error = "",
    wrapperClassName = "",
    ...rest
  } = props;
  const switchId = useId();

  return (
    <div className={tw("flex flex-col", wrapperClassName)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={switchId}
      />
      <div>
        <Switch id={switchId} {...rest} />
      </div>
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomSwitch;
