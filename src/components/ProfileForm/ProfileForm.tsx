import React, { FC } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Col } from "components/Col";
import { Row } from "components/Row";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ProfileFormProps } from "./ProfileForm.types";
/* styles */
import s from "./ProfileForm.module.scss";
import { PROFILE_FORM_RULES } from "constants/validationRules";
import { ProfileFormPicture } from "components/ProfileFormPicture";

export const ProfileForm: FC<ProfileFormProps> = ({
    onSubmit,
    loading = false,
    ...restProps
}) => {
    const initialValues = {
        username: "نام کاربریِ غیر قابل تعویض :|",
    };
    return (
        <div className={clsx(s.box, "shadow")}>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                style={{ width: "100%" }}
                initialValues={initialValues}
            >
                <Row>
                    <Col md={4}>
                        <Form.Item
                            label="نام"
                            name="name"
                            rules={PROFILE_FORM_RULES.name}
                        >
                            <Input.Text tabIndex={1} />
                        </Form.Item>

                        <Form.Item
                            label="فیلد شماره یک"
                            name="username"
                            rules={PROFILE_FORM_RULES.password}
                        >
                            <Input.Text disabled={true} tabIndex={3} />
                        </Form.Item>
                    </Col>
                    <Col md={4} className="d-flex flex-column">
                        <Form.Item
                            label="نام کاربری"
                            name="username"
                            rules={PROFILE_FORM_RULES.name}
                        >
                            <Input.Text tabIndex={2} />
                        </Form.Item>

                        <Form.Item
                            label="بیوگرافی"
                            name="biography"
                            rules={PROFILE_FORM_RULES.biography}
                        >
                            <Input.Textarea rows={5} />
                        </Form.Item>
                    </Col>
                    <Col
                        xl={4}
                        className="d-flex flex-column justify-content-between align-items-end"
                    >
                        <ProfileFormPicture />
                        <Form.Item className="align-self-end">
                            <Button
                                className="mt-4 align-self-end"
                                htmlType="submit"
                                type="primary"
                                size="large"
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
