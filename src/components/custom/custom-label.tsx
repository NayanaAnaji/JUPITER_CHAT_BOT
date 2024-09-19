import type { FC, LabelHTMLAttributes } from "react";

import { Tooltip } from "antd";

import { Info } from "lucide-react";

import { tw } from "@/utils/lib";


interface ICustomLabel extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string;
  className?: string;
  required?: boolean;
  infoTxt?: string;
}

const CustomLabel: FC<ICustomLabel> = (props) => {
  const { label, className, required, infoTxt, ...rest } = props;

  return label ? (
    <label
      className={tw("text-xs dark:text-secondary-white", className)}
      {...rest}
    >
      {label}
      {required && <span className="mx-[2px] text-red-500">*</span>}
      {infoTxt && (
        <Tooltip title={infoTxt} arrow={false}>
          <Info
            size={14}
            className="mb-1 inline-block cursor-pointer"
            role="note"
          />
        </Tooltip>
      )}
    </label>
  ) : (
    <></>
  );
};

export default CustomLabel;
