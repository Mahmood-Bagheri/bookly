import React, { FC } from "react";
/* components */
import { Form } from "antd";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* constants */
import { BOOK_COMMENT_VALIDATION_RULES } from "constants/validationRules";
/* types */
import { CommentInputBoxProps } from "./CommentInputBox.types";
/* styles */
import s from "./CommentInputBox.module.scss";

export const CommentInputBox: FC<CommentInputBoxProps> = ({
    onSubmit,
    loading = false,
}) => {
    const [form] = Form.useForm<Comment.Create.Variables>();

    const handleSubmitForm = (values: Comment.Create.Variables) => {
        onSubmit(values.comment, form);
    };

    return (
        <div className={clsx(s.box, `shadow`)}>
            <Text className={s.title}>نظرتون در مورد این پست چیه؟</Text>
            <Form form={form} layout="vertical" onFinish={handleSubmitForm}>
                <Form.Item
                    name="comment"
                    rules={BOOK_COMMENT_VALIDATION_RULES.comment}
                >
                    <Input.Textarea
                        className="mt-2"
                        rows={7}
                        placeholder="مثلا: من این کتاب رو خیلی دوست دارم :)"
                    />
                </Form.Item>

                <Button
                    loading={loading}
                    htmlType="submit"
                    className="mt-3"
                    type="primary"
                >
                    ارسال نظر
                </Button>
            </Form>
        </div>
    );
};
