import React, { FC } from "react";
/* components */
import { Form } from "antd";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { Input } from "components/Input";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ValidationRuleType } from "types/global";
import { CreateAuthorFormProps } from "./CreateAuthorForm.types";
/* styles */
import s from "./CreateAuthorForm.module.scss";
import { useForm } from "antd/lib/form/Form";

export const CreateAuthorForm: FC<CreateAuthorFormProps> = ({
    onSubmit,
    loading,
    ...restProps
}) => {
    const [form] = useForm();
    return (
        <Form form={form} onFinish={v => onSubmit(v, form)}>
            <Row className="mb-2">
                <Col lg={3}>
                    <Form.Item name="name" rules={rules.title}>
                        <Input.Text />
                    </Form.Item>
                </Col>
                <Col lg={6}>
                    <Button htmlType="submit" loading={loading} type="primary">
                        افزودن نویسنده
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};

export const rules: ValidationRuleType = {
    title: [
        {
            required: true,
            message: "نام نویسنده را وارد کنید",
        },
    ],
};
