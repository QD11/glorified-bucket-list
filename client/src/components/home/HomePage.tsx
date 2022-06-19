import { RootState } from "app/rootReducer";
import { AddForm } from "components/bucketlist/AddForm";
import { Box } from "components/styled/elements/box";
import { logIn } from "features/users/userSlice";
import { ReactElement, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CookieSetOptions } from "universal-cookie";

interface HomePageProps {
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

export const HomePage = ({
    setCookie,
    removeCookie,
}: HomePageProps): ReactElement => {
    const dispatch = useDispatch();

    const { email } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (email) {
            setCookie("email", email);
        }
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
        <>
            <Box flex justifyContent="space-between">
                <span>Glorified Bucket List</span>
                <button onClick={handleLogOut}>logout</button>
            </Box>
            <AddForm />
        </>
    );
};
