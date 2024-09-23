import { type NotificationInstance } from "antd/lib/notification/interface";
import { type Dispatch, type SetStateAction } from "react";
import { type NavigateFunction } from "react-router-dom";
import { type MenuItem, type MessageModalCallObj } from "@/types/object-types";

import { ReducerActionKeys } from "@/components/context/app-context-reducer";

export type ContextReducerActions = {
  stateKey: ReducerActionKeys.SIDER_MENU_ITEMS,
  value: MenuItem[],
}

export type AppContextState = {
  navigate: NavigateFunction;
  notification: NotificationInstance;
  messageModal: {
    success: (obj: MessageModalCallObj) => void;
    error: (obj: MessageModalCallObj) => void;
  };
  contextReducerState: { siderMenuItems: MenuItem[] }
  contextReducerDispatch: Dispatch<ContextReducerActions>;

  userId: string;
  userEmail: string;
};

export type AuthContextState = {
  auth: object;
  setAuth: Dispatch<SetStateAction<object>>;
};