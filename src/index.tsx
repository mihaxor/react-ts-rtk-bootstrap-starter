import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router';
import {RoutesConfig} from '@/app/RoutesConfig';
import {Provider} from 'react-redux';
import Store from '@/app/ReduxStoreConfig';
import App from '@/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/style.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path='/'
                        element={<Navigate to='/home' />}
                    />
                    <Route path='/' element={<App />}>
                        {RoutesConfig.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                Component={route.component}
                            />
                        ))}
                    </Route>
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
