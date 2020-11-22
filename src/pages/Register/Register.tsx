import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { RegisterForm } from "components/RegisterForm";

const Register: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="Register" />
            <RegisterForm onSubmit={() => {}} />
        </Fragment>
    );
};

export default Register;
