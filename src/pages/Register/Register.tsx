import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { RegisterForm } from 'components/RegisterForm';
import { RegisterMutationVariables, useRegister } from 'hooks/operations';
import { RegisterFormPicture } from 'components/RegisterFormPicture';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
/* modules */
import { omit } from 'lodash/fp';
/* helpers */
import * as LocalStorage from 'helpers/localStorage';
import { useRecoilState } from 'recoil';
import { userState } from 'services/recoil/user/atoms';

const Register: FC = props => {
    const [register, { isLoading: registerLoading }] = useRegister();
    const [, updateUser] = useRecoilState(userState);

    const handleUserRegistration = (vars: RegisterMutationVariables) => {
        register(
            omit('confirmPassword')(vars) as RegisterMutationVariables
        ).then(res => {
            if (res) {
                updateUser({
                    role: res?.role,
                    token: res?.token,
                    userId: res?._id,
                });
                LocalStorage.setItem('token', res?.token);
                LocalStorage.setItem('role', res?.role);
                LocalStorage.setItem('userId', res?._id);
            }
        });
    };

    return (
        <Fragment>
            <DocumentTitle title='ثبت نام' />
            <Row className='align-items-center justify-content-between'>
                <Col lg={4} className='order-1 order-lg-0'>
                    <RegisterForm
                        loading={registerLoading}
                        onSubmit={handleUserRegistration}
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
