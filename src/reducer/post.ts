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
        addPosting: (state) => {

        },
        deletePosting: (state) => {

        }
    }
});

export const { addPosting, deletePosting } = postSlice.actions;

export default postSlice.reducer;