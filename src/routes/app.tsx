import { FC, lazy, LazyExoticComponent } from 'react'
import { Alert } from 'antd';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { IAppContextProps } from '@/components/context/app-context';
import { IAntdConfigProps } from '@/components/context/antd-config';


import Login from './auth/login';
import { Paths } from '@/constants/paths';
import { store } from '@/store/store';

const AppContext: LazyExoticComponent<FC<IAppContextProps>> = lazy(() => import("@/components/context/app-context"));
// const AuthLayer: LazyExoticComponent<FC> = lazy(() => import("@/components/context/auth-layer"));
const UILayout: LazyExoticComponent<FC> = lazy(() => import("@/components/common/ui-layout"));
const AntdConfig: LazyExoticComponent<FC<IAntdConfigProps>> = lazy(() => import("@/components/context/antd-config"));
const NotFound: LazyExoticComponent<FC> = lazy(() => import("@/routes/not-found"));
const Landing: LazyExoticComponent<FC> = lazy(() => import("@/routes/landing"));


const App: FC = () => {
    return (
        <Alert.ErrorBoundary>
            <Provider store={store}>
                <AntdConfig>
                    <AppContext>
                        <Routes>
                            {/*** PRIVATE ROUTES ***/}
                            <Route path={Paths.LANDING} element={<UILayout />}>
                                <Route index element={<Landing />} />
                            </Route>

                            {/*** PUBLIC ROUTES ***/}
                            <Route path={Paths.LOGIN} element={<Login />} />
                            <Route path={Paths.NOT_FOUND} element={<NotFound />} />
                        </Routes>
                    </AppContext>
                </AntdConfig>
            </Provider>
        </Alert.ErrorBoundary>
    );
};

export default App
