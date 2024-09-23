import { Modal, notification } from "antd";
import { createContext, useReducer, type FC, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { appContextReducer } from "@/components/context/app-context-reducer";

import Lottie from "react-lottie-player";
import errorAnimationData from "src/assets/gifs/failed.json";
import successAnimationData from "src/assets/gifs/success.json";

import { type MessageModalCallObj } from "@/types/object-types";
import { safeJSONParse } from "@/utils/lib";
import { type NotificationInstance } from "antd/lib/notification/interface";
import { AppContextState } from "@/types/context-types";
import { StorageKeys } from "@/utils/storage-keys";

const contextReducerInitialState: AppContextState["contextReducerState"] = {
  siderMenuItems: [],
}

export const appContext = createContext<AppContextState>({
  navigate: () => null,
  notification: {} as NotificationInstance,
  messageModal: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    success: (_obj: MessageModalCallObj) => null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error: (_obj: MessageModalCallObj) => null
  },
  contextReducerState: contextReducerInitialState,
  contextReducerDispatch: () => null,

  userId: "",
  userEmail: "",
});

export interface IAppContextProps {
  children: ReactNode;
}

const MessageModalBody: FC<{ data: object, obj: MessageModalCallObj }> = ({ data, obj }) => (
  <>
    <Lottie animationData={data} className="size-24 mx-auto" play loop />
    {obj.title && <h4 className="text-md text-center mt-4">{obj.title}</h4>}
    {obj.message && <p className="text-xs text-center">{obj.message}</p>}
  </>
);

const AppContext: FC<IAppContextProps> = ({ children }) => {
  const [notificationApi, notificationContextHolder] = notification.useNotification();
  const [messageModalApi, modalContextHolder] = Modal.useModal();

  /* This is the common reudcer for the context dispatches 
     ⚠️NOTE: Please don't add any extra states in context use the below state only*/
  const [contextReducerState, contextReducerDispatch] = useReducer(appContextReducer, contextReducerInitialState);

  const navigate = useNavigate();

  const value = {
    navigate,
    notification: notificationApi,

    //user specific shared
    userId: safeJSONParse<string>(sessionStorage.getItem(StorageKeys.USER_NAME), ""),
    userEmail: safeJSONParse(sessionStorage.getItem(StorageKeys.EMAIL), ""),
      //message modal context calls
    messageModal: {
      success: (obj: MessageModalCallObj) => {
        messageModalApi.success({
          icon: <></>,
          centered: true,
          content: <MessageModalBody
            data={successAnimationData}
            obj={obj} />
        })
      },
      error: (obj: MessageModalCallObj) => {
        messageModalApi.success({
          icon: <></>,
          centered: true,
          content: <MessageModalBody
            data={errorAnimationData}
            obj={obj} />
        })
      },
    },

    contextReducerState,
    contextReducerDispatch,
  };

  return <appContext.Provider value={value}
    children={<>
      {modalContextHolder}
      {notificationContextHolder}
      {children}
    </>}
  />;
};

export default AppContext;