import { Layout, Menu, Segmented } from "antd";
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  Moon,
  Sun
} from "lucide-react";
import { Suspense, useState, type FC } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import fnLogo from "@/assets/fn-logo.svg";
import { Theme } from "@/components/context/antd-config";
import { Paths, privateRoutes } from "@/constants/paths";
import { useData, useTheme } from "@/hooks/context-hooks";

import Sider from "antd/es/layout/Sider";
import Loader from "./loader";
import { useFullscreen } from "@/hooks/use-full-screen";
import { useAuth } from "@/hooks/auth-hooks";

const { Header, Content } = Layout;

const UILayout: FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [fullscreen, toggleFullScreen] = useFullscreen();
  const { pathname } = useLocation();

  // const { navigate } = useData();
  const { theme, toggleTheme } = useTheme();
  const { auth } = useAuth();
  const { contextReducerState } = useData();

  return auth ? (
    <Layout>
      <Sider
        collapsible
        collapsed={collapsed}
        theme="light"
        onCollapse={(value) => setCollapsed(value)}
        width={210}
        collapsedWidth={60}
        trigger={
          <div className="flex-center h-full dark:text-primary-blue">
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </div>}>
        <div className="h-12 flex-center bg-primary-blue overflow-hidden items-center">
          <div className="h-full w-full bg-white p-2 flex gap-3 font-mono">
            <img src={fnLogo} alt="flynava logo" decoding="async" loading="lazy" />
            <div className="-mt-1">
              <h4 className="font-bold">FLYNAVA</h4>
              <p className="text-xs">Technologies</p>
            </div>
          </div>
        </div>
        <Menu
          mode="inline"
          items={contextReducerState?.siderMenuItems ?? []}
          defaultSelectedKeys={[]}
          selectedKeys={[pathname]}
          className="h-full bg-gr-sider pt-11"
          onClick={(e) => {
            console.log(e);
          }} />
      </Sider>
      <Layout className="min-h-screen">
        <Header className="flex h-12 items-center justify-end bg-gr-header p-0 pl-4 dark:bg-dark">
          <div className="flex items-center gap-2">
            <Segmented
              value={fullscreen}
              onChange={toggleFullScreen}
              options={[{
                label: <div className="py-2"><Minimize size={14} /></div>,
                value: false,
              },
              {
                label: <div className="py-2"><Maximize size={14} /></div>,
                value: true,
              }]} />
            <Segmented
              value={theme}
              onChange={toggleTheme}
              options={[{
                label: <div className="py-2"><Sun size={14} /></div>,
                value: Theme.LIGHT,
              },
              {
                label: <div className="py-2"><Moon size={14} /></div>,
                value: Theme.DARK,
              }]}
            />
          </div>
          {/* <UserDetailView /> */}
        </Header>
        {pathname !== Paths.LANDING && <div className="p-2 px-4 bg-white mb-0.5 uppercase font-medium dark:bg-gray-900 dark:text-white">
          {privateRoutes.find((o: { path: string; }) => location.pathname.includes(o.path))?.header}
        </div>}
        <Content className="flex flex-col bg-white">
          <main className="relative flex-grow bg-transparent p-4 dark:bg-dark">
            <Suspense fallback={<Loader className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />}>
              <Outlet />
            </Suspense>
          </main>
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Navigate to={Paths.LOGIN} state={{ from: location }} replace />
  );
};

export default UILayout;