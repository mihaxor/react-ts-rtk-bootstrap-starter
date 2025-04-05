import {useGetPostByIdQuery} from '@/common/store/account/TypiPostInfoApi';

export const usePostById = (id: number) => {
    const {data: postById} = useGetPostByIdQuery(id);

    return {postById};
}