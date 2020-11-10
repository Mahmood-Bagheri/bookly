import React, { FunctionComponent } from "react";
/* components */
import { Textarea } from "components/Textarea";
import { Button } from "components/Button";
/* modules */
import clsx from "classnames";
/* types */
import { CommentInputBoxComponentProps } from "./CommentInputBox.types";
/* styles */
import s from "./CommentInputBox.module.scss";

export const CommentInputBox: FunctionComponent<CommentInputBoxComponentProps> = props => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <p className={s.title}>نظرتون در مورد این پست چیه؟</p>
            <Textarea
                className="mt-2"
                rows={7}
                placeholder="مثلا: من این کتاب رو خیلی دوست دارم :)"
            />
            <Button className="mt-3" type="primary">
                ارسال نظر
            </Button>
        </div>
    );
};
