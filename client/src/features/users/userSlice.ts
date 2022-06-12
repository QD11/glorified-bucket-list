import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { API_URL } from "utils/url";

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

interface LoginUserProps {
    email: string;
    password: string;
}

export async function loginUser({
    email,
    password,
}: LoginUserProps): Promise<any> {
    try {
        let response = await axios.post(`${API_URL}/users/login`, {
            email,
            password,
        });
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

interface SignupUserProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export async function signupUser({
    firstName,
    lastName,
    email,
    password,
}: SignupUserProps): Promise<any> {
    let response;
    try {
        response = await axios.post(`${API_URL}/users`, {
            firstName,
            lastName,
            email,
            password,
        });
    } catch (error) {
        console.error(error);
        return null;
    }

    return response;
}
