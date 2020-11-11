import React, { FunctionComponent } from "react";
/* components */
import { DeleteButton } from "components/DeleteButton";
/* modules */
import dayJs from "dayjs";
/* assets */
import Image from "assets/images/book.jpg";
/* types */
import { CommentBoxComponentProps } from "./CommentBox.types";
/* styles */
import s from "./CommentBox.module.scss";
import { RbacRender } from "services/rbac";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = props => {
    const {
        id: commentId,
        body,
        date,
        username,
        onDelete = defaultOnDelete,
    } = props;

    const relativeFakeTime = dayJs().from(date, true);

    return (
        <div className={s.box}>
            <RbacRender permission="comments.delete">
                <img className={s.profileImage} src={Image} />
            </RbacRender>

            <div className={s.header}>
                <div className={s.description}>
                    {username}
                    {"  "}
                    {relativeFakeTime} پیش گفته
                </div>

                <RbacRender permission="comments.delete">
                    <DeleteButton onClick={() => onDelete(commentId)} />
                </RbacRender>
            </div>

            <p className={s.body}>{body}</p>
        </div>
    );
};

const defaultOnDelete = () => {};
