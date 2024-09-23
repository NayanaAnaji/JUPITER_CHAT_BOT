
import CustomInput from "@/components/custom/custom-input";
import { Paths } from "@/constants/paths";
import { maskEmail } from "@/helper/string-formatter";
import { useData } from "@/hooks/context-hooks";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import ApiMessages from "@/lang/api-msgs";
import buttons from "@/lang/buttons";
import labels from "@/lang/labels";
import { ValidationMsgs } from "@/lang/validation-msgs";
import { APIEndPoints } from "@/services/api";
import { javaAxiosInstance } from "@/services/axios-config";
import { RequestStatus } from "@/services/httpStatus";
import { LoginFormSchema } from "@/services/schemas/auth-schemas";
import { ServerKeys } from "@/services/server-keys";
import { fetchUserDetails } from "@/store/slices/auth-slice";
import { setSessionStorage } from "@/utils/storage";
import { StorageKeys } from "@/utils/storage-keys";
import { Button, Progress } from "antd";

import dayjs from "dayjs";

import { useFormik } from "formik";
import { User, Lock, Binary, Eye, EyeOff } from "lucide-react";
import { ChangeEvent, FC, useState } from "react";
import * as Yup from "yup";

const LoginForm: FC = () => {
    const { user } = useAppSelector((state) => state.authSlice);
    const [otpStatus, setOtpStatus] = useState<string>(RequestStatus.IDLE);
    const dispatch = useAppDispatch();
    const { navigate } = useData();
    const [incorrectOtp, setIncorrectOtp] = useState<boolean>(false);
    const [otp, setOtp] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const loginFormik = useFormik<LoginFormSchema>({
        enableReinitialize: true,
        initialValues: {
            [ServerKeys.USERNAME]: "",
            [ServerKeys.PASSWORD]: "",
        },
        validationSchema: Yup.object({
            [ServerKeys.USERNAME]: Yup.string().required(ValidationMsgs.usernameIsRequired),
            [ServerKeys.PASSWORD]: Yup.string().required(ValidationMsgs.passwordIsRequired),
        }),
        onSubmit: async (values) => {
            const formData = new FormData();
            formData.append(ServerKeys.USERNAME, values[ServerKeys.USERNAME]);
            formData.append(ServerKeys.PASSWORD, values[ServerKeys.PASSWORD]);

            fetchUserDetails(dispatch, formData, setOtpStatus);
            setShowPassword(false);
        },
    });

    const handleVerifyOtp = async (e: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const enteredOtp = e.target.value;
        setOtp(enteredOtp);

        if (enteredOtp.length === 6) {
            try {
                setIncorrectOtp(false);
                const response = await javaAxiosInstance.post(APIEndPoints.SUBMIT_LOGIN, {
                    [ServerKeys.LOGGER_ID]: user?.[ServerKeys.LOGGER_ID],
                    [ServerKeys.USER_OTP]: enteredOtp,
                    [ServerKeys.API_OTP]: user?.[ServerKeys.OTP_DETAILS]?.[ServerKeys.OTP_IS],
                });

                if (response.data.otp_verified === RequestStatus.SUCCESS) {
                    const store: Readonly<{ [key: string]: string }> = {
                        [StorageKeys.LOGGER_ID]: response.data?.[ServerKeys.LOGGER_ID],
                        [StorageKeys.EMAIL]: user?.Result[0][ServerKeys.EMAIL],
                        [StorageKeys.USER_ID]: user?.Result[0].name,
                        [StorageKeys.POS]: JSON.stringify(user?.Result[0][ServerKeys.LIST_OF_POS]),
                        [StorageKeys.CLUSTER]: user?.Result[0][ServerKeys.CLUSTER],
                        [StorageKeys.ACTIVE]: JSON.stringify(user?.Result[0].active),
                        [StorageKeys.DEPARTMENT]: user?.Result[0][ServerKeys.DEPARTMENT],
                        [StorageKeys.ROLE]: user?.Result[0][ServerKeys.ROLE],
                        [StorageKeys.SYSTEM_DATE]: JSON.stringify(dayjs(new Date(2024, 6, 6))),
                        // [StorageKeys.SYSTEM_DATE]:JSON.stringify(dayjs(new Date())),
                        [StorageKeys.USER_LEVEL]: `${user?.Result[0][ServerKeys.USER_LEVEL]}`,
                        [StorageKeys.ACCESS_LIST]: JSON.stringify(
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            user?.Result[0][ServerKeys.MODULE].filter((ele:any) => ele?.checked).map((ele: any) => ele?.moduleName)),
                    };

                    for (const key in store) {
                        setSessionStorage(key, store[key]);
                    }
                    navigate(Paths.LANDING);
                    window.location.reload();
                } else {
                    setIncorrectOtp(true);
                }
            } catch (error) {
                console.error("Error verifying OTP:", error);
            }
        } else if (enteredOtp.length > 6) {
            setIncorrectOtp(true);
        }
    };

    const toggleShowPassword = (): void => {
        setShowPassword(!showPassword);
    };

    return (
        <form aria-label="login form" className="space-y-4" onSubmit={loginFormik.handleSubmit}>
            <div className="mb-4 space-y-1">
                <CustomInput
                    placeholder={labels.username}
                    addonBefore={<User size={16} />}
                    name={ServerKeys.USERNAME}
                    value={loginFormik.values[ServerKeys.USERNAME]}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    error={loginFormik.errors[ServerKeys.USERNAME]}
                    touched={loginFormik.touched[ServerKeys.USERNAME]}
                    disabled={otpStatus === RequestStatus.SUCCESS}
                />
                <CustomInput
                    placeholder={labels.password}
                    addonBefore={<Lock size={16} />}
                    name={ServerKeys.PASSWORD}
                    type={showPassword ? "text" : "password"}
                    suffix={showPassword
                        ? <EyeOff size={16} onClick={toggleShowPassword} role="button" />
                        : <Eye size={16} onClick={toggleShowPassword} role="button" />
                    }
                    value={loginFormik.values[ServerKeys.PASSWORD]}
                    onChange={loginFormik.handleChange}
                    onBlur={loginFormik.handleBlur}
                    error={loginFormik.errors[ServerKeys.PASSWORD]}
                    touched={loginFormik.touched[ServerKeys.PASSWORD]}
                    disabled={otpStatus === RequestStatus.SUCCESS}
                />
            </div>
            <div className="space-x-4 flex">
                <Button
                    className="w-full"
                    htmlType="submit"
                    loading={otpStatus === RequestStatus.LOADING}
                    disabled={otpStatus === RequestStatus.SUCCESS}>{buttons.getOtp}</Button>
                <Button
                    className="w-full bg-primary-white text-secondary-dark border border-paled-dark"
                    htmlType="reset"
                    onClick={()=>loginFormik.resetForm()}
                    disabled={otpStatus === RequestStatus.SUCCESS}>{buttons.reset}</Button>
            </div>
            {/* OTP Input */}
            {otpStatus === RequestStatus.LOADING && (
                <p className="text-xs font-thin">{ApiMessages.authenticatingUser}</p>
            )}

            {otpStatus === RequestStatus.SUCCESS && (
                <p className="text-xs font-thin">
                    {`${ApiMessages.otpSentTo} - ${maskEmail(user?.Result[0]?.email)}`}
                </p>
            )}

            {otpStatus === RequestStatus.FAILED && (
                <p className="text-xs font-thin">{ApiMessages.invalidCredentials}</p>
            )}

            {otpStatus === RequestStatus.UNABLE_TO_CONNECT && (
                <p className="text-xs font-thin text-red">{ApiMessages.unableToConnectToServer}</p>
            )}

            {otpStatus === RequestStatus.SUCCESS
                ? <>
                    <CustomInput
                        addonBefore={<Binary size={16} />}
                        placeholder="OTP"
                        minLength={6}
                        maxLength={6}
                        onChange={handleVerifyOtp}
                    />
                    <div logger-id={user?.loggerId} id="logger-id" />
                    < Progress
                        showInfo={false}
                        steps={6}
                        status="active"
                        size={[57, 3]}
                        percent={(otp.length / 6) * 100}
                    />
                    <p className="text-xs font-thin text-red">
                        {incorrectOtp && ValidationMsgs.incorrectOtp}
                    </p>
                </>
                : <></>}
        </form>
    );
};

export default LoginForm;
