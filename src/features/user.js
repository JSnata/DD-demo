import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    name: "",
    email: ""
    }

const userSlice = createSlice({
    name: "user",
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { login } = userSlice.actions;
export default userSlice.reducer;