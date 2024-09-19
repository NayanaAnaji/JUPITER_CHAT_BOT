import { notification } from "antd";
import { createContext, type FC, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { safeJSONParse } from "@/utils/lib";
import { type NotificationInstance } from "antd/lib/notification/interface";
import { AppContextState } from "@/types/context-types";
import { StorageKeys } from "@/utils/storage-keys";

 
export const appContext = createContext<AppContextState>({
  navigate: () => null,
  notification: {} as NotificationInstance,
  userId: "",
});
 
export interface IAppContextProps {
  children: ReactNode;
}
 
const AppContext: FC<IAppContextProps> = ({ children }) => {
  const [notificationApi, notificationContextHolder] = notification.useNotification();

  const navigate = useNavigate();
 
  const value = {
    navigate,
    notification: notificationApi,
 
    //user specific shared
    userId: safeJSONParse<string>(sessionStorage.getItem(StorageKeys.USER_NAME), ""),

  };
 
  return <appContext.Provider value={value}
    children={<>
      {notificationContextHolder}
      {children}
    </>}
  />;
};
 
export default AppContext;