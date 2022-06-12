import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { UserState } from "features/users/userSlice";
import { LoginPage } from "components/home/LoginPage";
import { SignupPage } from "components/home/SignupPage";
import { Box } from "components/styled/elements/box";
import { Routes, Route, useParams } from "react-router-dom";

export const MainPage = (): ReactElement => {
    const user = useSelector((state: RootState) => state.user);

    if (!user.loggedIn) {
        return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        );
    }
    return <Box>LoggedIn</Box>;
};
