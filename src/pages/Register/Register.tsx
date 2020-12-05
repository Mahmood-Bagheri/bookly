import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { RegisterForm } from "components/RegisterForm";
import { useRegister } from "hooks/operations";

const Register: FC = props => {
    const [register, { isLoading: registerLoading }] = useRegister();

    return (
        <Fragment>
            <DocumentTitle title="ثبت نام" />
            <RegisterForm loading={registerLoading} onSubmit={register} />
        </Fragment>
    );
};

export default Register;
