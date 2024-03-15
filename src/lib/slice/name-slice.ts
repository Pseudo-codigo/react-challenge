import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/lib/store'
import { NamesModel } from '@/lib/models/names-model'


// Define the initial state using that type
const initialState: NamesModel = {
    firstName: 'Breaking',
    lastName: 'Bad',
}

export const namesSlice = createSlice({
    name: 'names',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setNames: (state, action: PayloadAction<NamesModel>) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
})

export const { setNames } = namesSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNames = (state: RootState) => state.names

export default namesSlice.reducer