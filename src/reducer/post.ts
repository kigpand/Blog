import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    post: { 
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
        changeRecentPost: (state, action) => {
            state.post = {...action.payload};
        },
        deletePosting: (state) => {

        },
    }
});

export const { changeRecentPost, deletePosting } = postSlice.actions;

export default postSlice.reducer;