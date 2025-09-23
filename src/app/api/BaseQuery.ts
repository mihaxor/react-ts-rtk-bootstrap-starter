import {AxiosError} from 'axios';
import {BaseQueryFn} from '@reduxjs/toolkit/query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseQuery = (): BaseQueryFn<any, any> => {
// eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async (endpoint: any) => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
            const result = await endpoint();
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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