import {AxiosInstance} from 'axios';
import {PostType} from '@/common/store';

export const typiPostCreateApi = (client: AxiosInstance) => {
    const
        getPosts = async (): Promise<void | PostType[]> =>
            await client.get<PostType[]>(`/posts`)
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                })
                .catch(error => console.error(error)),

        getPostById = async (id: number): Promise<void | PostType> =>
            await client.get<PostType>(`/posts/${id}`)
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                })
                .catch(error => console.error(error)),

        updatePost = async (id: number): Promise<void> => {
            await client.post<PostType>(`/posts`, {
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: id
                }),
                headers: {'Content-type': 'application/json; charset=UTF-8'}
            })
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                })
                .catch(error => console.error(error))
        };

    return {
        getPosts,
        getPostById,
        updatePost
    }
}