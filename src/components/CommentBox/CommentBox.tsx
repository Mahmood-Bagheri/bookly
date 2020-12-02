import React, { FunctionComponent } from "react";
/* components */
import { DeleteButton } from "components/DeleteButton";
import { Text } from "components/Text";
/* modules */
import dayJs from "dayjs";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { CommentBoxComponentProps } from "./CommentBox.types";
/* styles */
import s from "./CommentBox.module.scss";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = ({
    id: commentId,
    body,
    date,
    username,
    onDelete = defaultOnDelete,
}) => {
    const relativeFakeTime = dayJs().from(date, true);

    return (
        <div className={s.box}>
            <img className={s.profileImage} src={BookImage} />

            <div className={s.header}>
                <p className={s.description}>
                    {username}
                    {"  "}
                    {relativeFakeTime} پیش گفته
                </p>

                <DeleteButton
                    permission="comments.delete"
                    onConfirm={() => onDelete(commentId)}
                    title="برای حذف کردن این نظر مطمئن هستید؟"
                />
            </div>

            <Text className={s.body}>{body}</Text>
        </div>
    );
};

const defaultOnDelete = () => {};
