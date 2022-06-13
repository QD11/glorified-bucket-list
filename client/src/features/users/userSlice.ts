import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
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

export async function fetchMe(email: string): Promise<any> {
    let response;
    try {
        response = await axios.post(`${API_URL}/users/fetchMe`, {
            email,
        });
    } catch (error) {
        console.error(error);
        return null;
    }

    if (response.status === 200) {
        return response.data;
    } else {
        return null;
    }
}

export async function loginUser({
    email,
    password,
}: LoginUserProps): Promise<any> {
    let response;
    try {
        response = await axios.post(`${API_URL}/users/login`, {
            email,
            password,
        });
    } catch (error) {
        console.error(error);
        return null;
    }

    if (response.status === 200) {
        return response.data;
    } else {
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
        response = await axios.post(`${API_URL}/users/signup`, {
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
