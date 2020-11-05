import React, { FunctionComponent } from "react";
import { CommentInputBoxComponentProps } from "./CommentInputBox.types";
import s from "./CommentInputBox.module.scss";
import { Button } from "components/Button";

export const CommentInputBox: FunctionComponent<CommentInputBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <p className={s.title}>نظرتون در مورد این پست چیه؟</p>
            <textarea
                rows={7}
                className={s.input}
                placeholder="مثلا: من این کتاب رو خیلی دوست دارم :)"
            />
            <Button type="primary">ارسال نظر</Button>
        </div>
    );
};
