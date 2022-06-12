import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "app/rootReducer";
import { UserState } from "features/users/userSlice";
import { LoginPage } from "components/home/LoginPage";
import { Box } from "components/styled/elements/box";

export const MainPage = (): ReactElement => {
    const user = useSelector((state: RootState) => state.user);

    if (!user.loggedIn) {
        return <LoginPage />;
    }
    return <Box>LoggedIn</Box>;
};
