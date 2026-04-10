import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    user: null | {
        id: string;
        name: string;
        email: string;
    };
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers : {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
})

export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;