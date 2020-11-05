import React, { Fragment, FunctionComponent } from "react";
import { ReactComponent as CommentIcon } from "assets/icons/comment.svg";
import { ReactComponent as LikeButton } from "assets/icons/like.svg";
import { BookDetailsCountBoxComponentProps } from "./BookDetailsCountBox.types";
import s from "./BookDetailsCountBox.module.scss";

export const BookDetailsCountBox: FunctionComponent<BookDetailsCountBoxComponentProps> = props => {
    const { type, count, description, ...restProps } = props;

    if (type === "like") {
        return <LikeButton className={s.icon} {...restProps} />;
    }
    return <CommentIcon className={s.icon} {...restProps} />;
};
