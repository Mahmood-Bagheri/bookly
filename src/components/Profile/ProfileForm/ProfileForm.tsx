import React, { FC } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Col } from "components/Col";
import { Row } from "components/Row";
import { UploadDropbox } from "components/UploadDropbox";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
import { useForm } from "antd/lib/form/Form";
/* helpers */
import { getDropboxConfig } from "./lib";
/* assets */
import { ProfileFormPicture } from "components/Profile";
/* constants */
import { PROFILE_FORM_RULES } from "constants/validationRules";
/* types */
import { ProfileFormProps } from "./ProfileForm.types";
/* styles */
import s from "./ProfileForm.module.scss";

export const ProfileForm: FC<ProfileFormProps> = ({
    onSubmit,
    initialProfile,
    loading = false,
}) => {
    const [form] = useForm<typeof initialProfile>();

    return (
        <div className={clsx(s.box, "shadow p-3")}>
            <Text className={s.title}>پروفایل</Text>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                style={{ width: "100%" }}
                className="mt-3"
                form={form}
                initialValues={initialProfile}
            >
                <Row>
                    <Col md={4}>
                        <ProfileFormPicture className="d-block d-md-none mb-2" />

                        <Form.Item
                            name="image"
                            label="عکس پروفایل"
                            valuePropName="file"
                            rules={PROFILE_FORM_RULES.profileImage}
                        >
                            <UploadDropbox {...getDropboxConfig(form)} />
                        </Form.Item>

                        <Form.Item
                            label="نام"
                            name="name"
                            rules={PROFILE_FORM_RULES.name}
                        >
                            <Input.Text />
                        </Form.Item>
                    </Col>
                    <Col md={4} className="d-flex flex-column">
                        <Form.Item
                            label="بیوگرافی"
                            name="biography"
                            rules={PROFILE_FORM_RULES.biography}
                        >
                            <Input.Textarea rows={5} />
                        </Form.Item>
                    </Col>
                    <Col
                        md={4}
                        className="d-flex flex-column justify-content-between align-items-end"
                    >
                        <ProfileFormPicture className="d-none d-md-block" />
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
