type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type PostTypeResponse = PostType[];
type PostTypeRequest = number;

export type {
    PostType,
    PostTypeResponse,
    PostTypeRequest
}