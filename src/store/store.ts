import { configureStore } from '@reduxjs/toolkit';
import comments from '../reducer/comments';
import post from '../reducer/post';

export const store = configureStore({
    reducer : {
        post: post,
        comment: comments
    }
})