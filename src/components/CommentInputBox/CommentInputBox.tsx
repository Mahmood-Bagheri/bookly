import React, { FunctionComponent } from "react";
/* components */
import { Form } from "antd";
import { Textarea } from "components/Textarea";
import { Button } from "components/Button";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* types */
import { CommentInputBoxComponentProps } from "./CommentInputBox.types";
/* styles */
import s from "./CommentInputBox.module.scss";
import { BOOK_COMMENT_VALIDATION_RULES } from "constants/validationRules";

export const CommentInputBox: FunctionComponent<CommentInputBoxComponentProps> = ({
    onSubmit,
}) => {
    const [form] = Form.useForm();

    return (
        <div className={clsx(s.box, `shadow`)}>
            <Text className={s.title}>نظرتون در مورد این پست چیه؟</Text>
            <Form
                form={form}
                layout="vertical"
                onFinish={values => {
                    onSubmit(values.comment);
                    form.resetFields();
                }}
            >
                <Form.Item
                    name="comment"
                    rules={BOOK_COMMENT_VALIDATION_RULES.comment}
                >
                    <Textarea
                        className="mt-2"
                        rows={7}
                        placeholder="مثلا: من این کتاب رو خیلی دوست دارم :)"
                    />
                </Form.Item>

                <Button htmlType="submit" className="mt-3" type="primary">
                    ارسال نظر
                </Button>
            </Form>
        </div>
    );
};
