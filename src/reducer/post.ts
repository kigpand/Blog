import { IPosting } from './../model/IPosting';
import { createSlice } from '@reduxjs/toolkit';

interface IPostReducer {
    post: IPosting,
    searchList: IPosting[] | []
}

const initialState: IPostReducer = {
    post: { 
        title: "",
        content: "",
        hashTag: [],
        date: new Date()
    },
    searchList: []
};

export const postSlice = createSlice({
    name: 'posting',
    initialState,
    reducers: {
        changeRecentPost: (state, action) => {
            state.post = {...action.payload};
        },
        makeSearchList: (state, action) => {
            state.searchList = [...action.payload];
        }
    }
});

export const { changeRecentPost, makeSearchList } = postSlice.actions;

export default postSlice.reducer;