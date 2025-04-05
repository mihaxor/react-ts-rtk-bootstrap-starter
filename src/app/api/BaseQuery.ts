import {AxiosError} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseQuery = (): BaseQueryFn<any, any, unknown> => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (endpoint: any) => {
        try {
            const result = await endpoint();
            return {data: result};
        } catch (axiosError) {
            const err = axiosError as AxiosError;

            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            };
        }
    };
};