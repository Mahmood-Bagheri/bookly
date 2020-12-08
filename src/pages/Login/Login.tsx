import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { LoginForm } from "components/LoginForm";
import { useLogin } from "hooks/operations";

const Login: FC = props => {
    const [login, { isLoading: loginIsLoading }] = useLogin();

    return (
        <Fragment>
            <DocumentTitle title="ورود" />

            <LoginForm loading={loginIsLoading} onSubmit={login} />
        </Fragment>
    );
};

export default Login;
