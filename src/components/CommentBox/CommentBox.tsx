import React, { FunctionComponent } from "react";
/* components */
import { DeleteButton } from "components/DeleteButton";
import { AclService } from "services/rbac";

/* modules */
import dayJs from "dayjs";
/* assets */
import Image from "assets/images/book.jpg";
/* types */
import { CommentBoxComponentProps } from "./CommentBox.types";
/* styles */
import s from "./CommentBox.module.scss";

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
            <AclService permission="comments.delete">
                <img className={s.profileImage} src={Image} />
            </AclService>

            <div className={s.header}>
                <div className={s.description}>
                    {username}
                    {"  "}
                    {relativeFakeTime} پیش گفته
                </div>

                <AclService permission="comments.delete">
                    <DeleteButton onClick={() => onDelete(commentId)} />
                </AclService>
            </div>

            <p className={s.body}>{body}</p>
        </div>
    );
};

const defaultOnDelete = () => {};
