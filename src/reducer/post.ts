import { createSlice } from '@reduxjs/toolkit';
import { IPosting } from './../model/IPosting';

const initialState = {
    data: { 
        title: "",
        content: "",
        hash: [],
        date: new Date()
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