import React, { FC } from "react";
/* components */
import { Row } from "components/Row";
import { Col } from "components/Col";
import { UploadDropbox } from "components/UploadDropbox";
import { Text } from "components/Text";
import { Form } from "antd";
import { Button } from "components/Button";
import { Select } from "components/Select";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* mock */
import { categoryOptions, publishersOptions } from "./mock";
/* types */
import { SubmitBookFormProps } from "./SubmitBookForm.types";
import { DraggerProps } from "antd/lib/upload";
/* styles */
import s from "./SubmitBookForm.module.scss";
import { Input } from "components/Input";

export const SubmitBookForm: FC<SubmitBookFormProps> = ({
    className,
    onSubmit,
    loading = false,
}) => {
    const [form] = Form.useForm();

    const dropBoxConfig: DraggerProps = {
        showUploadList: false,
        multiple: false,
        accept: "image/x-png,image/gif,image/jpeg",
        beforeUpload: file => {
            return false;
        },
        onChange: file => {
            form.setFieldsValue({ image: file.file });
        },
    };

    return (
        <div className={clsx(s.box, `shadow p-3`, className)}>
            <Text className={s.title}>ثبت کتاب</Text>

            <Form
                form={form}
                layout="vertical"
                className="mt-3"
                onFinish={onSubmit}
            >
                <Row>
                    <Col lg={4}>
                        <Form.Item
                            name="image"
                            label="عکس کتاب"
                            valuePropName="file"
                        >
                            <UploadDropbox {...dropBoxConfig} />
                        </Form.Item>

                        <Form.Item name="name" label="نام کتاب">
                            <Input.Text />
                        </Form.Item>

                        <Form.Item name="releaseYear" label="سال نشر">
                            <Input.Number />
                        </Form.Item>

                        <Form.Item name="tag" label="دسته بندی">
                            <Select<string> options={categoryOptions} />
                        </Form.Item>
                    </Col>
                    <Col lg={4}>
                        <Form.Item name="publisher" label="ناشر">
                            <Select<string> options={publishersOptions} />
                        </Form.Item>
                    </Col>
                    <Col
                        lg={4}
                        className="d-flex flex-column justify-content-end align-items-end"
                    >
                        <Form.Item>
                            <Button
                                className="mt-4"
                                size="large"
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                            >
                                ثبت کتاب
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
