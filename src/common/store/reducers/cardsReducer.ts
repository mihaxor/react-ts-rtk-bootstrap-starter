import {createSlice} from '@reduxjs/toolkit'

const initialState = {value: 0} as { value: number | undefined }

export const usernameSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        updateCardsPayload: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {updateCardsPayload} = usernameSlice.actions
export default usernameSlice.reducer;
