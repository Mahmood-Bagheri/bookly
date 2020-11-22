import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { LoginForm } from "components/LoginForm";
import { useLogin } from "services/api/operations";

const Login: FC = props => {
    const [login] = useLogin();

    return (
        <Fragment>
            <DocumentTitle title="Login" />
            <LoginForm onSubmit={() => {}} />
        </Fragment>
    );
};

export default Login;
