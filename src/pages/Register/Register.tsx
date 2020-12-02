import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { RegisterForm } from "components/RegisterForm";
import { useRegister } from "hooks/operations";
import { TopBar } from "components/TopBar";

const Register: FC = props => {
    const [register] = useRegister();

    return (
        <Fragment>
            <DocumentTitle title="Register" />
            <RegisterForm onSubmit={register} />
        </Fragment>
    );
};

export default Register;
