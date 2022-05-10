import { createSlice } from '@reduxjs/toolkit';
import { IComment } from './../model/IPosting';

const initialState: IComment = {
    id: '',
    comment: '',
};

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        addComment: (state) => {

        },
        deleteComment: (state) => {

        }
    }
});

export const { addComment, deleteComment } = commentSlice.actions;

export default commentSlice.reducer;