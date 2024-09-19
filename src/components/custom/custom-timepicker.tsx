import { type FC, useId } from "react";

import { TimePicker, TimePickerProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";

interface ICustomTimePickerProps extends TimePickerProps {
  label?: string;
  required?: boolean;
  error?: string;
  infoTxt?: string;
  wrapperClassname?: string;
  touched?: boolean;
}

const CustomTimePicker: FC<ICustomTimePickerProps> = (props) => {
  const {
    label = "",
    required = false,
    touched = false,
    error = "",
    infoTxt = "",
    wrapperClassname = "",
    ...rest
  } = props;
  const timeInputId = useId();

  return (
    <div className={tw("flex flex-col", wrapperClassname)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={timeInputId}
      />
      <TimePicker id={timeInputId} {...rest} />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomTimePicker;
