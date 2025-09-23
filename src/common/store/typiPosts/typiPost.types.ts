interface ReducerAction<T> {
    payload: T;
    type: string;
}

interface PostType {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type PostTypeResponse = PostType[];
type PostTypeRequest = number;

export type {
    ReducerAction,
    PostType,
    PostTypeResponse,
    PostTypeRequest,
}