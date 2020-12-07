import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { UploadDropbox, UploadProps } from "components/UploadDropbox";
import { Text } from "components/Text";
import { Form } from "antd";
/* helpers */
import * as notice from "helpers/notice";
/* assets */
/* types */
import { SubmitBookFormProps } from "./SubmitBookForm.types";
/* styles */
import s from "./SubmitBookForm.module.scss";
import { Button } from "components/Button";

export const SubmitBookForm: FC<SubmitBookFormProps> = ({
    className,
    onSubmit,
    loading = false,
    ...restProps
}) => {
    const [form] = Form.useForm();

    const dropBoxConfig: UploadProps = {
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
                    <Col lg={6}>
                        <Form.Item name="image" label="عکس کتاب">
                            <UploadDropbox {...dropBoxConfig} />
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
                    </Col>
                </Row>
            </Form>
        </div>
    );
};
