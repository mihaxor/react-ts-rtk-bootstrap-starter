import {createSlice} from '@reduxjs/toolkit'
import {ReducerAction} from '@/common/store/typiPosts/typiPost.types';

const initialState = {value: 0} as { value: number | undefined }

export const typiPostSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        updatePostsPayload: (state, action: ReducerAction<number>) => {
            state.value = action.payload
        }
    }
})

export const {updatePostsPayload} = typiPostSlice.actions
export default typiPostSlice.reducer;
