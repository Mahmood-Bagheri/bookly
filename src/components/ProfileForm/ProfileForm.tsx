import React, { FC } from "react";
/* components */
import { Form } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ProfileFormProps } from "./ProfileForm.types";
/* styles */
import s from "./ProfileForm.module.scss";
import { PROFILE_FORM_RULES } from "constants/validationRules";
import { Input } from "components/Input";
import { Password } from "components/Password";
import { Button } from "components/Button";
import { Col } from "components/Col";
import { Row } from "components/Row";
import { Textarea } from "components/Textarea";

export const ProfileForm: FC<ProfileFormProps> = ({
    className,
    onSubmit,
    loading = false,
    ...restProps
}) => {
    const onFinish = (values: object) => onSubmit(values);

    const initialValues = {
        username: "نام کاربریِ غیر قابل تعویض :|",
    };
    return (
        <div className={clsx(s.box, "shadow", className)}>
            <Form
                layout="vertical"
                onFinish={onFinish}
                style={{ width: "100%" }}
                initialValues={initialValues}
            >
                <Row>
                    <Col md={6}>
                        <Form.Item
                            label="نام"
                            name="name"
                            rules={PROFILE_FORM_RULES.name}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="فیلد شماره یک"
                            name="username"
                            rules={PROFILE_FORM_RULES.password}
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col md={6} className="d-flex flex-column">
                        <Form.Item
                            label="نام کاربری"
                            name="username"
                            rules={PROFILE_FORM_RULES.name}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="بیوگرافی"
                            name="biography"
                            rules={PROFILE_FORM_RULES.biography}
                        >
                            <Textarea rows={5} />
                        </Form.Item>

                        <Form.Item className="align-self-end">
                            <Button
                                className="mt-4 align-self-end"
                                size="large"
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                            >
                                به روزرسانی پروفایل
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
