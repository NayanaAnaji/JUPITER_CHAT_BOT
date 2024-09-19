import { useId, type FC } from "react";

import { Checkbox, CheckboxProps } from "antd";

import CustomError from "@/components/custom/custom-error";
import CustomLabel from "@/components/custom/custom-label";

interface ICustomCheckbox extends CheckboxProps {
  label?: string;
  error?: string;
  infoTxt?: string;
  wrapperClassName?: string;
  touched?: boolean;
}

const CustomCheckbox: FC<ICustomCheckbox> = (props) => {
  const {
    label = "",
    error = "",
    required = false,
    touched = false,
    infoTxt = "",
    wrapperClassName = "",
    ...rest
  } = props;
  const checkId = useId();

  return (
    <div className={wrapperClassName}>
      <Checkbox id={checkId} {...rest}>
        <CustomLabel
          label={label}
          required={required}
          infoTxt={infoTxt}
          htmlFor={checkId}
        />
      </Checkbox>
      <CustomError error={error} touched={touched} />
    </div>
  );
};

export default CustomCheckbox;
