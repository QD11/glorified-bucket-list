import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

export interface UserState {
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    loggedIn: boolean;
}

const initialState: UserState = {
    email: null,
    firstName: null,
    lastName: null,
    loggedIn: false,
};

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<UserState>) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.loggedIn = action.payload.loggedIn;
        },
    },
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;

export const loginUser =
    (email: string, password: string) => async (): Promise<void> => {
        try {
            await axios.post("/login", {
                email,
                password,
            });
        } catch (error) {
            console.error(error);
        }
    };
