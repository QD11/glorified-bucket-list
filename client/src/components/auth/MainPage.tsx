import { RootState } from "app/rootReducer";
import { LoginPage } from "components/auth/LoginPage";
import { SignupPage } from "components/auth/SignupPage";
import { HomePage } from "components/home/HomePage";
import { fetchMe, logIn } from "features/users/userSlice";
import { ReactElement, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

export const MainPage = (): ReactElement => {
    const dispatch = useDispatch();

    const { loggedIn } = useSelector((state: RootState) => state.user);

    const [cookie, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        if (!loggedIn && cookie.email) {
            const login = async () => {
                let user;
                try {
                    user = await fetchMe(cookie.email);
                } catch (error) {
                    console.log(error);
                    return;
                }

                if (user) {
                    dispatch(
                        logIn({
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            loggedIn: true,
                        })
                    );
                }
            };
            login();
        }
    }, [cookie.email, dispatch, loggedIn]);

    if (!loggedIn) {
        return (
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <HomePage
                        removeCookie={removeCookie}
                        setCookie={setCookie}
                    />
                }
            />
            <Route path="/signup" element={<SignupPage />} />
        </Routes>
    );
};
