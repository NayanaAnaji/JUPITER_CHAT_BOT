import { Button, Tooltip, Upload, type UploadProps } from "antd";
import {
  CirclePlay,
  CirclePlus,
  CircleX,
  Edit2,
  FileDown,
  List,
  Save,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { createContext, useContext, type ReactNode } from "react";

import buttons from "@/lang/buttons";
import { tw } from "@/utils/lib";
import { type ActionButtonProps } from "./custom-row-actions";

interface ICustomActionButtonsContext {
  runButtonProps?: ActionButtonProps & { disable?: boolean };
  uploadButtonProps?: UploadProps & { loading?: boolean };
  addButtonProps?: ActionButtonProps;
  saveButtonProps?: ActionButtonProps;
  viewButtonProps?: ActionButtonProps;
  downloadButtonProps?: ActionButtonProps;
  cancelButtonProps?: ActionButtonProps;
  deleteButtonProps?: ActionButtonProps;
  editButtonProps?: ActionButtonProps;
}

const CustomActionButtonsContext = createContext<
  ICustomActionButtonsContext | undefined
>(undefined);

const useCustomActionButtonsContext = (): ICustomActionButtonsContext => {
  const context = useContext(CustomActionButtonsContext);

  if (!context) {
    throw new Error(
      "useCustomActionButtonsContext must be used within a CustomActionButtonsContext.Provider",
    );
  }

  return context;
};

function CustomActionButtons({ children, className, ...props }:
  Partial<ICustomActionButtonsContext> & {
    children: ReactNode;
    className?: string;
  }) {
  return (
    <CustomActionButtonsContext.Provider value={props}>
      <div className={tw("flex w-full justify-end gap-1", className)}>
        {children}
      </div>
    </CustomActionButtonsContext.Provider>
  );
}

CustomActionButtons.Run = (): ReactNode => {
  const { runButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.run} arrow={false}>
    <Button
      type="primary"
      disabled={runButtonProps?.disabled}
      icon={<CirclePlay size={18} />}
      {...runButtonProps}
    />
  </Tooltip>
};

CustomActionButtons.Upload = (): ReactNode => {
  const { uploadButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.upload} arrow={false}>
    <Upload {...uploadButtonProps}>
      <Button type="primary" loading={uploadButtonProps?.loading} icon={<UploadCloud size={18} />} />
    </Upload>
  </Tooltip>
};

CustomActionButtons.Add = (): ReactNode => {
  const { addButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.add} arrow={false}>
    <Button
      type="primary"
      icon={<CirclePlus size={18} />}
      {...addButtonProps}
    />
  </Tooltip>
};

CustomActionButtons.Save = (): ReactNode => {
  const { saveButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.save} arrow={false}>
    <Button
      type="primary"
      icon={<Save size={18} />}
      {...saveButtonProps} />
  </Tooltip>
};

CustomActionButtons.View = (): ReactNode => {
  const { viewButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.view} arrow={false}>
    <Button
      type="primary"
      icon={<List size={18} />}
      {...viewButtonProps} />
  </Tooltip>
};

CustomActionButtons.Download = (): ReactNode => {
  const { downloadButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.download} arrow={false}>
    <Button
      type="primary"
      icon={<FileDown size={18} />}
      {...downloadButtonProps}
    />
  </Tooltip>
};

CustomActionButtons.Cancel = () => {
  const { cancelButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.cancel} arrow={false}>
    <Button
      type="primary"
      icon={<CircleX size={18} />}
      {...cancelButtonProps}
    />
  </Tooltip>
};

CustomActionButtons.Delete = (): ReactNode => {
  const { deleteButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.delete} arrow={false}>
    <Button
      type="primary"
      icon={<Trash2 size={18} />}
      {...deleteButtonProps} />
  </Tooltip>
};

CustomActionButtons.Edit = () => {
  const { editButtonProps } = useCustomActionButtonsContext();

  return <Tooltip title={buttons.edit} arrow={false}>
    <Button
      type="primary"
      icon={<Edit2 size={18} />}
      {...editButtonProps} />
  </Tooltip>
};

export default CustomActionButtons;

