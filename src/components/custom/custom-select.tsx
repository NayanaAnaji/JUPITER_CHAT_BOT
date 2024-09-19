import { useId, type FC } from "react";

import { Select, type SelectProps } from "antd";

import CustomError from "./custom-error";
import CustomLabel from "./custom-label";

import { tw } from "@/utils/lib";
interface ICustomSelectProps extends SelectProps {
  label?: string;
  error?: string;
  required?: boolean;
  touched?: boolean;
  infoTxt?: string;
  wrapperClassName?: string;
}

const CustomSelect: FC<ICustomSelectProps> = (props) => {
  const {
    error = "",
    label = "",
    touched = false,
    required = false,
    infoTxt = "",
    wrapperClassName = "",
    ...rest
  } = props;
  const selectId = useId();

  return (
    <div className={tw("flex w-full flex-col", wrapperClassName)}>
      <CustomLabel
        label={label}
        required={required}
        infoTxt={infoTxt}
        htmlFor={selectId}
      />
      <Select
        id={selectId}
        showSearch
        allowClear
        filterSort={(a, b) => `${a.label}`.localeCompare(`${b.label}`)}
        filterOption={(input, option) => ((option?.label ?? "") as string).toLowerCase().includes(input.toLowerCase())}
        {...rest}
      />
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomSelect;
