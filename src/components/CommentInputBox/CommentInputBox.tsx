import React, { FunctionComponent } from "react";
/* components */
import { Textarea } from "components/Textarea";
import { Button } from "components/Button";
import { Form } from "antd";
/* modules */
import clsx from "classnames";
/* types */
import { CommentInputBoxComponentProps } from "./CommentInputBox.types";
/* styles */
import s from "./CommentInputBox.module.scss";

export const CommentInputBox: FunctionComponent<CommentInputBoxComponentProps> = ({
    onSubmit,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <p className={s.title}>نظرتون در مورد این پست چیه؟</p>
            <Form
                layout="vertical"
                onFinish={v => onSubmit(v.comment)}
                style={{ width: "100%" }}
            >
                <Form.Item
                    name="comment"
                    rules={[
                        {
                            required: true,
                            message: "متن نظر نمی تواند خالی باشد :(",
                        },
                    ]}
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
