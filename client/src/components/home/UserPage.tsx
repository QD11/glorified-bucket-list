/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootState } from "app/rootReducer";
import { logIn } from "features/users/userSlice";
import { ReactElement, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CookieSetOptions } from "universal-cookie";

interface UserPageProps {
    setCookie: (
        name: "email",
        value: any,
        options?: CookieSetOptions | undefined
    ) => void;
    removeCookie: (
        name: string,
        options?: CookieSetOptions | undefined
    ) => void;
}

export const UserPage = ({
    setCookie,
    removeCookie,
}: UserPageProps): ReactElement => {
    const dispatch = useDispatch();

    const { email } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        setCookie("email", email);
    }, [email, setCookie]);

    const handleLogOut = useCallback(() => {
        removeCookie("email");
        dispatch(
            logIn({
                email: null,
                firstName: null,
                lastName: null,
                loggedIn: false,
            })
        );
    }, [dispatch, removeCookie]);

    return (
        <div>
            <span>Welcome</span>
            <button onClick={handleLogOut}>logout</button>
        </div>
    );
};
