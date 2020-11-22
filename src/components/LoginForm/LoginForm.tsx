import React, { FunctionComponent } from "react";
/* components */
import { Form } from "antd";
import { Container } from "components/Container";
import { Input } from "components/Input";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { LoginFormComponentProps } from "./LoginForm.types";
/* styles */
import s from "./LoginForm.module.scss";

export const LoginForm: FunctionComponent<LoginFormComponentProps> = props => {
    const { onSubmit } = props;

    return (
        <div className="row justify-content-center">
            <div className="col-xl-5">
                <div className={s.box}>
                    <Form
                        layout="vertical"
                        name="basic"
                        onFinish={onSubmit}
                        style={{ width: "100%" }}
                    >
                        <Form.Item
                            label="نام کاربری"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "نام کاربری را وارد کنید",
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
                                ورود
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
};
