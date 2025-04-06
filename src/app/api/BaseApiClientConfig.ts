import axios, {AxiosInstance} from 'axios';
import axiosRetry from 'axios-retry';
import {typiPostCreateApi} from '@/common/store';

const DEFAULT_RETRIES = 1;
const DEFAULT_RETRY_DELAY = 1000;

export const BaseApiClientConfig = () => {

    const client: AxiosInstance = axios.create({
        baseURL: import.meta.env.VITE_APP_API_BASE_URL,
        allowAbsoluteUrls: false
    });

    axiosRetry(client, {
        retries: DEFAULT_RETRIES,
        retryDelay() {
            return DEFAULT_RETRY_DELAY;
        },
    });

    // client.interceptors.request.use(
    //     config => {
    //         return config;
    //     });

    // client.interceptors.response.use(
    //     response => {
    //         return response;
    //     },
    //     error => {
    //         if (error.response && error.response.data) {
    //             return Promise.reject({
    //                 status: error.status || error.response.status,
    //                 message: error.message || error.response.message,
    //                 ...error.response.data
    //             });
    //         }
    //         return Promise.reject({
    //             status: error.status || 500,
    //             message: error.message || 'Unknonw error',
    //             ...error
    //         });
    //     });

    const typiPostApi = typiPostCreateApi(client);

    return {
        ...typiPostApi
    }
}