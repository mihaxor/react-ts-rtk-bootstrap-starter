import {useGetPostByIdQuery} from '@/common/store';

export const usePostById = (id: number) => {
    const {data: postById} = useGetPostByIdQuery(id);

    return {postById};
}