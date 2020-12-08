import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { LoginForm } from "components/LoginForm";
import { useLogin } from "hooks/operations";
import { LoginFormPicture } from "components/LoginFormPicture";
import { Row } from "components/Row";
import { Col } from "components/Col";

const Login: FC = props => {
    const [login, { isLoading: loginIsLoading }] = useLogin();

    return (
        <Fragment>
            <DocumentTitle title="ورود" />
            <Row className="align-items-center">
                <Col lg={6} className="order-1 order-lg-0">
                    <LoginForm loading={loginIsLoading} onSubmit={login} />
                </Col>
                <Col lg={6}>
                    <LoginFormPicture />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Login;
