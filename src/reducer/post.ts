import { IPosting } from './../model/IPosting';
import { createSlice } from '@reduxjs/toolkit';

interface IPostReducer {
    post: IPosting,
    searchItem: string | null,
    searchList: IPosting[] | []
}

const initialState: IPostReducer = {
    post: { 
        title: "",
        content: "",
        hashTag: [],
        date: new Date()
    },
    searchItem: null,
    searchList: []
};

export const postSlice = createSlice({
    name: 'posting',
    initialState,
    reducers: {
        changeRecentPost: (state, action) => {
            state.post = {...action.payload};
        },
        changeSearchItem: (state, action) => {
            state.searchItem = action.payload;
        },
        makeSearchList: (state, action) => {
            state.searchList = [...action.payload];
        }
    }
});

export const { changeRecentPost, changeSearchItem, makeSearchList } = postSlice.actions;

export default postSlice.reducer;