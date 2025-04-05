import {createApi} from '@reduxjs/toolkit/query/react';
import {BaseQuery} from '@/app/api/BaseQuery';

// const customBackOff = async (attempt = 0, maxRetries: number) => {
//     const attempts = Math.min(attempt, maxRetries);
//
//     await new Promise(resolve => {
//         setTimeout(resolve, attempts * 1000);
//     });
// };

// const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_API_BASE_URL }), {
//     maxRetries: 3,
//     backoff: customBackOff,
// });

export const BaseApi = createApi({
    tagTypes: [
        'Posts'
    ],
    keepUnusedDataFor: 10,
    baseQuery: BaseQuery(),
    // baseQuery: staggeredBaseQuery,
    endpoints: () => ({})
});
