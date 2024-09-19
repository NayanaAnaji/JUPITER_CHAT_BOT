import { themeContext } from "@/components/context/antd-config";
import { appContext } from "@/components/context/app-context";
import { useContext } from "react";

export const useData = () => {
    return useContext(appContext);
};

export const useTheme = () => {
    return useContext(themeContext);
};
