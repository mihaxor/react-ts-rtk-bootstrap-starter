export {default as typiPostReducer} from '@/common/store/typiPosts/typiPostReducer';
export {updatePostsPayload} from '@/common/store/typiPosts/typiPostReducer';
export {typiPostCreateApi} from '@/common/store/typiPosts/typiPostCreateApi';
export {
    useGetPostsQuery,
    useGetPostByIdQuery,
    useUpdatePostMutation
} from '@/common/store/typiPosts/typiPostInfoApi';
export type {
    PostType,
    PostTypeResponse,
    PostTypeRequest
} from '@/common/store/typiPosts/typiPost.types';