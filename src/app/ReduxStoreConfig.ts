import {configureStore} from '@reduxjs/toolkit';
import {typiPostReducer} from '@/common/store';
import {BaseApi} from '@/app/api/BaseApi';

const isProduction = process.env.NODE_ENV === 'production';
const Store = configureStore({
    devTools: !isProduction,
    reducer: {
        posts: typiPostReducer,
        [BaseApi.reducerPath]: BaseApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredPaths: ['modal']
        }
    }).concat([BaseApi.middleware])
})

export type IRootState = ReturnType<typeof Store.getState>;
export default Store;
