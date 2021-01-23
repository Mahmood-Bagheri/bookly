import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { LoginForm } from "components/LoginForm";
import { LoginFormPicture } from "components/LoginFormPicture";
import { Row } from "components/Row";
import { Col } from "components/Col";
/* modules */
import { LoginMutationVariables, useLogin } from "hooks/operations";
import * as LocalStorage from "helpers/localStorage";
import { useRecoilState } from "recoil";
import { userState } from "services/recoil/user/atoms";

const Login: FC = props => {
    const [login, { isLoading: loginIsLoading }] = useLogin();

    const [, updateUser] = useRecoilState(userState);

    const handleUSerLogin = (vars: LoginMutationVariables) => {
        login(vars).then(res => {
            updateUser({
                role: res?.data?.role,
                token: res?.data?.token,
                userId: res?.data?._id,
            });
            LocalStorage.setItem("token", res?.data?.token);
            LocalStorage.setItem("role", res?.data?.role);
            LocalStorage.setItem("userId", res?.data?._id);
        });
    };
    return (
        <Fragment>
            <DocumentTitle title="ورود" />
            <Row className="align-items-center justify-content-between">
                <Col lg={4} className="order-1 order-lg-0">
                    <LoginForm
                        loading={loginIsLoading}
                        onSubmit={handleUSerLogin}
                    />
                </Col>
                <Col lg={6}>
                    <LoginFormPicture />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Login;
