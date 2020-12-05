import React, { FunctionComponent } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Row } from "components/Row";
import { Col } from "components/Col";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* constants */
import { REGISTER_FORM_VALIDATION_RULES } from "constants/validationRules";
/* types */
import { RegisterFormComponentProps } from "./RegisterForm.types";
/* styles */
import s from "./RegisterForm.module.scss";
import { Password } from "components/Password";

export const RegisterForm: FunctionComponent<RegisterFormComponentProps> = ({
    onSubmit = defaultOnSubmit,
}) => {
    const onFinish = (values: any) => onSubmit(values);

    return (
        <Row className="justify-content-center">
            <Col xl={5}>
                <div className={clsx(s.box)}>
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        style={{ width: "100%" }}
                    >
                        <Form.Item
                            label="نام کاربری"
                            name="username"
                            rules={REGISTER_FORM_VALIDATION_RULES.username}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="رمز عبور"
                            name="password"
                            rules={REGISTER_FORM_VALIDATION_RULES.password}
                        >
                            <Password />
                        </Form.Item>
                        <Form.Item
                            label="تکرار رمز عبور"
                            name="confirmPassword"
                            rules={
                                REGISTER_FORM_VALIDATION_RULES.confirmPassword
                            }
                        >
                            <Password />
                        </Form.Item>

                        <Form.Item>
                            <Button
                                size="large"
                                type="primary"
                                htmlType="submit"
                                className="mt-4"
                            >
                                ثبت نام
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

const defaultOnSubmit = (values: any) => {};
