import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { LoginForm } from "components/LoginForm";
import { useLogin, LoginCredentialsType } from "hooks/operations";

const Login: FC = props => {
    const [login] = useLogin();

    return (
        <Fragment>
            <DocumentTitle title="Login" />
            <LoginForm
                onSubmit={credentials =>
                    login(credentials as LoginCredentialsType)
                }
            />
        </Fragment>
    );
};

export default Login;
