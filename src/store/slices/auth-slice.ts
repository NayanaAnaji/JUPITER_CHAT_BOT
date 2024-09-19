import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { RequestStatus } from "@/services/httpStatus";
import { javaAxiosInstance } from "@/services/axios-config";
import { APIEndPoints } from "@/services/api";
import { Dispatch, SetStateAction } from "react";
import { UserSchema } from "@/services/schemas/auth-schemas";

export interface IAuthSliceState {
  user: UserSchema;
}

const initialState: IAuthSliceState = {
  user: {} as UserSchema,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
});

export const fetchUserDetails = async (dispatch: AppDispatch, formData: FormData, setOtpStatus: Dispatch<SetStateAction<string>>) => {
    try {
      setOtpStatus(RequestStatus.LOADING);
      const response = await javaAxiosInstance.post(APIEndPoints.LOGIN_DETAILS, formData);
  
      if (response.data?.Response?.status === RequestStatus.SUCCESS) {
        dispatch(updateUser(response.data));
        setOtpStatus(RequestStatus.SUCCESS);
      } else {
        setOtpStatus(RequestStatus.FAILED);
      }
  
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setOtpStatus(RequestStatus.UNABLE_TO_CONNECT);
    }
  };

export const { updateUser } = authSlice.actions;
export default authSlice;