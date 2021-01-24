import React, { FC } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Col } from "components/Col";
import { Button } from "components/Button";
import { Row } from "components/Row";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { CreateCategoryFormProps } from "./CreateCategoryForm.types";
/* styles */
import s from "./CreateCategoryForm.module.scss";
import { ValidationRuleType } from "types/global";
import { useForm } from "antd/lib/form/Form";

export const CreateCategoryForm: FC<CreateCategoryFormProps> = ({
    onSubmit,
    loading = false,
    ...restProps
}) => {
    const [form] = useForm();
    return (
        <Form form={form} onFinish={v => onSubmit(v, form)}>
            <Row className="mb-2">
                <Col lg={3}>
                    <Form.Item name="title" rules={rules.title}>
                        <Input.Text />
                    </Form.Item>
                </Col>
                <Col lg={6}>
                    <Button htmlType="submit" loading={loading} type="primary">
                        افزودن دسته بندی
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
            message: "نام دسته بندی را وارد کنید",
        },
    ],
};
