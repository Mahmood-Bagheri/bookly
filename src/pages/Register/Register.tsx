import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { RegisterForm } from "components/RegisterForm";
import { RegisterMutationVariables, useRegister } from "hooks/operations";
import { RegisterFormPicture } from "components/RegisterFormPicture";
import { Row } from "components/Row";
import { Col } from "components/Col";
/* modules */
import { omit } from "lodash/fp";

const Register: FC = props => {
    const [register, { isLoading: registerLoading }] = useRegister();

    return (
        <Fragment>
            <DocumentTitle title="ثبت نام" />
            <Row className="align-items-center justify-content-between">
                <Col lg={4} className="order-1 order-lg-0">
                    <RegisterForm
                        loading={registerLoading}
                        onSubmit={v =>
                            register(
                                omit("confirmPassword")(
                                    v
                                ) as RegisterMutationVariables
                            )
                        }
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
