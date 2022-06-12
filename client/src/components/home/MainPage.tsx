import { RootState } from "app/rootReducer";
import { LoginPage } from "components/home/LoginPage";
import { SignupPage } from "components/home/SignupPage";
import { Box } from "components/styled/elements/box";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

export const MainPage = (): ReactElement => {
    const { loggedIn } = useSelector((state: RootState) => state.user);

    if (!loggedIn) {
        return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        );
    }
    return <Box>LoggedIn</Box>;
};
