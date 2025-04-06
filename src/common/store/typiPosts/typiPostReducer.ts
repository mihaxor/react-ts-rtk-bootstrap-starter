import {createSlice} from '@reduxjs/toolkit'

const initialState = {value: 0} as { value: number | undefined }

export const typiPostSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        updatePostsPayload: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updatePostsPayload} = typiPostSlice.actions
export default typiPostSlice.reducer;
