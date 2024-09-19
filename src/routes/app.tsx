import { FC, lazy, LazyExoticComponent } from 'react'
import { Alert } from 'antd';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { IAppContextProps } from '@/components/context/app-context';
import { IAntdConfigProps } from '@/components/context/antd-config';


import Login from './auth/login';
import { Paths } from '@/constants/paths';
import { store } from '@/store/store';

const AppContext: LazyExoticComponent<FC<IAppContextProps>> = lazy(
    () => import("@/components/context/app-context"),
);

const AntdConfig: LazyExoticComponent<FC<IAntdConfigProps>> = lazy(
    () => import("@/components/context/antd-config"));

const App:FC = () => {
    return (
        <Alert.ErrorBoundary>
            <Provider store={store}>
                <AntdConfig>
                    <AppContext>
                        <Routes>
                            <Route path={Paths.LOGIN} element={<Login />} />
                        </Routes>
                    </AppContext>
                </AntdConfig>
            </Provider>
        </Alert.ErrorBoundary>
    );
};

export default App
