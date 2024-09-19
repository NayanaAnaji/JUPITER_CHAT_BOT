import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth-slice";
import { ENV_MODE } from "@/services/env-config";

export const store = configureStore({
  reducer: {
    [authSlice.reducerPath]: authSlice.reducer,
  },
  devTools: ENV_MODE === "local" && !!window.__REDUX_DEVTOOLS_EXTENSION__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
