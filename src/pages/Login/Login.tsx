import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { LoginForm } from "components/LoginForm";

const Login: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="Login" />
            <LoginForm onSubmit={() => {}} />
        </Fragment>
    );
};

export default Login;
