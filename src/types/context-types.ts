import { type NotificationInstance } from "antd/lib/notification/interface";
import { type Dispatch, type SetStateAction } from "react";
import { type NavigateFunction } from "react-router-dom";

export type AppContextState = {
  navigate: NavigateFunction;
  notification: NotificationInstance;
  userId: string;
};

export type AuthContextState = {
  auth: object;
  setAuth: Dispatch<SetStateAction<object>>;
};
