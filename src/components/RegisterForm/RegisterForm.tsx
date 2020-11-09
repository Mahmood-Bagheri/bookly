import React, { FunctionComponent } from "react";
/* components */
import { Input } from "components/Input";
import { Form } from "antd";
import { Container } from "components/Container";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { RegisterFormComponentProps } from "./RegisterForm.types";
/* styles */
import s from "./RegisterForm.module.scss";

export const RegisterForm: FunctionComponent<RegisterFormComponentProps> = ({
    onSubmit = defaultOnSubmit,
}) => {
    const onFinish = (values: any) => onSubmit(values);

    return (
        <Container>
            <div className="row justify-content-center">
                <div className="col-xl-5">
                    <div className={clsx(s.box)}>
                        <Form
                            layout="vertical"
                            name="basic"
                            onFinish={onFinish}
                            style={{ width: "100%" }}
                        >
                            <Form.Item
                                label="نام کاربری"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "رمز عبور را وارد کنید",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="رمز عبور"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: "رمز عبور را وارد کنید",
                                    },
                                ]}
                            >
                                <Input />
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
                </div>
            </div>
        </Container>
    );
};

const defaultOnSubmit = (values: any) => {};
