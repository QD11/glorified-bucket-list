import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    userName: string | null;
    firstName: string | null;
    lastName: string | null;
}

const initialState: UserState = {
    userName: null,
    firstName: null,
    lastName: null,
};

export const userSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<UserState>) => {
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },
    },
});

export const { logIn } = userSlice.actions;

export default userSlice.reducer;
