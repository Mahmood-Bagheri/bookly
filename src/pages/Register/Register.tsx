import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { RegisterForm } from "components/RegisterForm";
import { useRegister } from "hooks/operations";
import { RegisterFormPicture } from "components/RegisterFormPicture";
import { Row } from "components/Row";
import { Col } from "components/Col";

const Register: FC = props => {
    const [register, { isLoading: registerLoading }] = useRegister();

    return (
        <Fragment>
            <DocumentTitle title="ثبت نام" />
            <Row className="align-items-center">
                <Col lg={6} className="order-1 order-lg-0">
                    <RegisterForm
                        loading={registerLoading}
                        onSubmit={register}
                    />
                </Col>
                <Col lg={6}>
                    <RegisterFormPicture />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Register;
