import { type AppContextState, type ContextReducerActions } from "@/types/context-types";

export enum ReducerActionKeys {
  SIDER_MENU_ITEMS = "siderMenuItems",
}

export const appContextReducer = (
  state: AppContextState["contextReducerState"],
  action: ContextReducerActions
) => {
  const { stateKey, value } = action;
  return { ...state, [stateKey]: value }
} 