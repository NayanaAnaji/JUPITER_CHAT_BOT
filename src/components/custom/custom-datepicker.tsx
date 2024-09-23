import { useId, type FC } from "react";

import { DatePicker, type DatePickerProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { tw } from "@/utils/lib";
import { DateFormats } from "@/helper/date-formatter";

export interface ICustomDatePickerProps extends DatePickerProps {
  label?: string;
  error?: string;
  required?: boolean;
  infoTxt?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomDatePicker: FC<ICustomDatePickerProps> = (props) => {
  const {
    label = "",
    error = "",
    touched = false,
    required = false,
    infoTxt,
    wrapperClassName = "",
    ...rest
  } = props;
  const dateId = useId();

  return (
    <div className={tw("flex w-full flex-col", wrapperClassName)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={dateId}
      />
      <DatePicker id={dateId} format={DateFormats.DD_MM_YYYY} {...rest} />
      <CustomError touched={touched} error={error} />
    </div>
  );
};

export default CustomDatePicker;
