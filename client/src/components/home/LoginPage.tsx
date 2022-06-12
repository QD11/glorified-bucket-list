import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { RootState } from "app/rootReducer";
import { UserState } from "features/users/userSlice";

interface LoginPageProps {
    user: UserState;
}

export const LoginPage = ({ user }: LoginPageProps): ReactElement => {
    return <div>LoginPage</div>;
};

const mapStateToProps = (state: RootState) => {
    return {
        user: state.user,
    };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
