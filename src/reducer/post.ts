import { createSlice } from '@reduxjs/toolkit';
import { IPosting } from './../model/IPosting';

const initialState: IPosting = {
    data: { 
        title: "",
        content: ""
    }
};

export const postSlice = createSlice({
    name: 'posting',
    initialState,
    reducers: {
        getPosting: (state, action) => {
            state.data = action.payload.data;
        },
        deletePosting: (state) => {

        },
    }
});

export const { getPosting, deletePosting } = postSlice.actions;

export default postSlice.reducer;