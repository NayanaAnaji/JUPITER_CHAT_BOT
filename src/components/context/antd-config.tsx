import {
    createContext,
    useEffect,
    useState,
    type FC,
    type ReactNode,
  } from "react";
   
  import { ConfigProvider, theme as antdTheme, type ThemeConfig } from "antd";
  import enUs from "antd/locale/en_US";
import { StorageKeys } from "@/utils/storage-keys";
   
  type ThemeToken = "orange" | "blue" | "pink" | "lime";
   
  export enum Theme {
    LIGHT = "light",
    DARK = "dark",
    SYSTEM = "system",
  }
   
  interface ThemeContextType {
    token: ThemeToken;
    theme: Theme;
    toggleTheme: () => void;
    setToken: (_token: ThemeToken) => void;
  }
   
  // eslint-disable-next-line react-refresh/only-export-components
  export const themeContext = createContext<ThemeContextType>({
    token: "blue",
    theme: Theme.LIGHT,
    toggleTheme: () => null,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setToken: (_token: ThemeToken) => null,
  });

  export interface IAntdConfigProps {
    children: ReactNode;
  }
   
  const AntdConfig: FC<IAntdConfigProps> = ({ children }) => {
    const { defaultAlgorithm, darkAlgorithm } = antdTheme;
    const [theme, setTheme] = useState<Theme>((localStorage.getItem(StorageKeys.ASMI_THEM) as Theme) ?? Theme.LIGHT);
    const [token, setToken] = useState<ThemeToken>("blue");
   
    const tokens: Record<ThemeToken, ThemeConfig["token"]> = {
      orange: { colorPrimary: "#f97316" },
      blue: { colorPrimary: "#337AB7" },
      pink: { colorPrimary: "#eb2f96" },
      lime: { colorPrimary: "#a0d911" },
    };
   
    const toggleTheme = (): void => {
      setTheme((prev) => {
        const newTheme = prev === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(StorageKeys.ASMI_THEM, newTheme);
        return newTheme;
      });
    };
   
    useEffect(() => {
      const root = document.documentElement;
      root.classList.remove(Theme.DARK, Theme.LIGHT);
   
      if (theme === Theme.SYSTEM) {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? Theme.DARK
          : Theme.LIGHT;
        root.classList.add(systemTheme);
      } else {
        root.classList.add(theme);
      }
    }, [theme]);
   
    const contextValue = {
      theme,
      token,
      toggleTheme,
      setToken,
      tokens,
    };
   
    return (
      <themeContext.Provider value={contextValue}>
        <ConfigProvider
          locale={enUs}
          theme={{
            token: {
              fontFamily: "var(--font-inter)",
              borderRadius: 2,
              fontSize: 14,
              ...tokens[token],
            },
            algorithm: theme === Theme.LIGHT ? defaultAlgorithm : darkAlgorithm,
            components: {
              Breadcrumb: { fontSize: 12 },
              Tooltip: { fontSize: 12, colorBgSpotlight: "rgb(80, 80, 80)" },
              Radio: { fontSize: 12 },
              Checkbox: {
                colorTextDisabled: "rgb(80, 80, 80)"
              },
              Table: {
                fontSize: 11,
                // cellPaddingBlockSM: 4,
                // cellPaddingInlineSM: 6,
                headerBg: "rgba(var(--c-primary),0.1)",
                headerSortHoverBg: "rgba(var(--c-primary),0.2)",
                borderColor: theme !== "dark"
                  ? "rgba(var(--c-dark), 0.2)"
                  : "rgba(var(--c-primary), 0.2)",
              },
              Message: { borderRadius: 2 },
              Notification: {
                fontSize: 10,
              },
            }
          }}>
          {children}
        </ConfigProvider>
      </themeContext.Provider>
    );
  };
   
  export default AntdConfig;