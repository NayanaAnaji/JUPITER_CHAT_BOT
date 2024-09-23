/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, type ReactNode } from "react";
import { type ButtonProps } from "antd";
import { Copy, Pencil, Plus, Save, Trash2, XCircle } from "lucide-react";
import { tw } from "@/utils/lib";
import buttons from "@/lang/buttons";

export type ActionButtonProps = Omit<ButtonProps, "icon" | "type" | "className">;

interface ICustomRowActionButtonsContext {
  copyButtonProps?: ActionButtonProps;
  addButtonProps?: ActionButtonProps;
  saveButtonProps?: ActionButtonProps;
  deleteButtonProps?: ActionButtonProps;
  editButtonProps?: ActionButtonProps;
  cancelButtonProps?: ActionButtonProps;
}

const CustomRowActionButtonsContext = createContext<ICustomRowActionButtonsContext>({
  copyButtonProps: {},
  addButtonProps: {},
  saveButtonProps: {},
  deleteButtonProps: {},
});

function CustomRowActionsButtons({ children, className, ...props }: Partial<ICustomRowActionButtonsContext> & {
  children: ReactNode;
  className?: string;
}) {
  return (
    <CustomRowActionButtonsContext.Provider value={props}>
      <div className={tw("flex w-full justify-end gap-1", className)}>
        {children}
      </div>
    </CustomRowActionButtonsContext.Provider>
  );
}

const useCustomActionButtonsContext = (): ICustomRowActionButtonsContext => {
  const context = useContext(CustomRowActionButtonsContext);

  if (!context) {
    throw new Error(
      "useCustomRowActionButtonsContext must be used within a CustomRowActionButtonsContext.Provider",
    );
  }

  return context;
};

CustomRowActionsButtons.Copy = (): ReactNode => {
  const { copyButtonProps } = useCustomActionButtonsContext();

  return <button {...copyButtonProps} className="p-1 bg-yellow-500 text-white rounded" title={buttons.copy}>
    <Copy size={14} />
  </button>;
};

CustomRowActionsButtons.Save = (): ReactNode => {
  const { saveButtonProps } = useCustomActionButtonsContext();

  return <button {...saveButtonProps} className="p-1 bg-primary text-white rounded" title={buttons.save}>
    <Save size={14} />
  </button>;
};

CustomRowActionsButtons.Add = (): ReactNode => {
  const { addButtonProps } = useCustomActionButtonsContext();

  return <button {...addButtonProps} className="p-1 bg-green-500 text-white rounded" title={buttons.add}>
    <Plus size={14} />
  </button>;
};

CustomRowActionsButtons.Delete = (): ReactNode => {
  const { deleteButtonProps } = useCustomActionButtonsContext();

  return <button {...deleteButtonProps} className="p-1 bg-red-500 text-white rounded" title={buttons.delete}>
    <Trash2 size={14} />
  </button>;
};

CustomRowActionsButtons.Cancel = (): ReactNode => {
  const { cancelButtonProps } = useCustomActionButtonsContext();

  return <button {...cancelButtonProps} className="p-1 bg-orange-500 text-white rounded" title={buttons.cancel}>
    <XCircle size={14} />
  </button>;
};

CustomRowActionsButtons.Edit = (): ReactNode => {
  const { editButtonProps } = useCustomActionButtonsContext();

  return <button {...editButtonProps} className="p-1 bg-violet-500 text-white rounded" title={buttons.edit}>
    <Pencil size={14} />
  </button>;
};

export default CustomRowActionsButtons;
