import {BaseApi} from '@/app/api/BaseApi';
import {BaseApiClientConfig} from '@/app/api/BaseApiClientConfig';
import {PostType, PostTypeRequest, PostTypeResponse} from '@/common/store';

export const typiPostInfoApi = BaseApi.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query<PostTypeResponse, void>({
            query: () => {
                return async () => await BaseApiClientConfig().getPosts();
            },
            // query: () => '/posts',
            // extraOptions: {
            //     maxRetries: 5
            // },
            providesTags: ['Posts']
        }),
        getPostById: build.query<PostType, number>({
            query: (id: number) => {
                return async () => await BaseApiClientConfig().getPostById(id);
            },
            providesTags: ['Posts']
        }),
        updatePost: build.mutation<PostTypeResponse, PostTypeRequest>({
            query: (id: number) => () => BaseApiClientConfig().updatePost(id),
            // query: () => ({
            //     url: '/posts',
            //     method: 'PUT',
            //     body: {
            //         title: 'Updated Post Title',
            //         body: 'Updated Post Body'
            //     }
            // }),
            invalidatesTags: ['Posts'],
            onQueryStarted: async (_request, {dispatch, queryFulfilled}) => {
                try {
                    const {data} = await queryFulfilled;

                    dispatch(
                        typiPostInfoApi.util.updateQueryData('getPosts', undefined, cached => {
                            if (cached) return data;
                        }),
                    );
                } catch (error) {
                    console.error('Error during mutation', error);
                }
            },
        })
    })
});

export const {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useUpdatePostMutation
} = typiPostInfoApi;