import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    login: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.login = action.payload;
        }
    }
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;