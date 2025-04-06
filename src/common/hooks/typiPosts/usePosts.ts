import {useGetPostsQuery, useUpdatePostMutation} from '@/common/store';

export const usePosts = () => {
    const {data: posts, isLoading: postsIsLoading, isError} = useGetPostsQuery();
    const [updatePost, {isLoading: updatePostIsLoading}] = useUpdatePostMutation();

    return {
        posts,
        postsIsLoading,
        isError,
        updatePost,
        updatePostIsLoading
    }
}