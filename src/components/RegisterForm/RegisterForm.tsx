import React, { FunctionComponent } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Button } from "components/Button";
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

export const RegisterForm: FunctionComponent<RegisterFormComponentProps> = ({
    onSubmit = defaultOnSubmit,
    loading = false,
}) => {
    const onFinish = (values: any) => onSubmit(values);

    return (
        <Form layout="vertical" onFinish={onFinish} style={{ width: "100%" }}>
            <Form.Item
                label="نام کاربری"
                name="username"
                rules={REGISTER_FORM_VALIDATION_RULES.username}
            >
                <Input.Text />
            </Form.Item>

            <Form.Item
                label="رمز عبور"
                name="password"
                rules={REGISTER_FORM_VALIDATION_RULES.password}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="تکرار رمز عبور"
                name="confirmPassword"
                rules={REGISTER_FORM_VALIDATION_RULES.confirmPassword}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item>
                <Button
                    className="mt-4"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    ثبت نام
                </Button>
            </Form.Item>
        </Form>
    );
};

const defaultOnSubmit = (values: any) => {};
