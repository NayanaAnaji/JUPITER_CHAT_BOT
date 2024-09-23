import { useId, type FC } from "react";

import { DatePicker, type TimeRangePickerProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";
import { DateFormats } from "@/helper/date-formatter";
import { tw } from "@/utils/lib";

const { RangePicker } = DatePicker;

export interface ICustomRangeDatePickerProps extends TimeRangePickerProps {
  label?: string;
  error?: string;
  required?: boolean;
  infoTxt?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomRangeDatePicker: FC<ICustomRangeDatePickerProps> = ({
  label = "",
  error = "",
  required = false,
  infoTxt = "",
  wrapperClassName = "",
  touched = false,
  ...rest
}) => {
  const dateId = useId();

  return (
    <div className={tw("flex w-full flex-col", wrapperClassName)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={dateId}
      />
      <RangePicker format={DateFormats.DD_MM_YYYY} id={dateId} {...rest} />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomRangeDatePicker;
