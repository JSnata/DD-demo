import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = { user: {
    name: "den",
    email: "den@gmail.com"
}}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        }
    }
});
export const userActions = userSlice.actions;

export const setUser = (name, email) => async (dispatch) => {

    dispatch(userActions.login({name: name, email: email}))

    const sendRequest = async () => {
        const response = await axios.post('http://localhost:3030/users', {name: name, email: email})

        if(!response.ok) {
            throw new Error('Sending user data failed')
        }
    } 
    
    try {
        await sendRequest();
    } catch (error) {
        console.log(error.message);
    }
}

export default userSlice.reducer;

