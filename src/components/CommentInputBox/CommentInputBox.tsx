import React, { FunctionComponent } from "react";
/* components */
import { Input } from "components/Input";
import { Button } from "components/Button";
/* types */
import { CommentInputBoxComponentProps } from "./CommentInputBox.types";
/* styles */
import s from "./CommentInputBox.module.scss";

export const CommentInputBox: FunctionComponent<CommentInputBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <p className={s.title}>نظرتون در مورد این پست چیه؟</p>
            <Input
                rows={7}
                placeholder="مثلا: من این کتاب رو خیلی دوست دارم :)"
            />
            <Button type="primary">ارسال نظر</Button>
        </div>
    );
};
