import React, { FC } from "react";
/* components */
import { DeleteButton } from "components/DeleteButton";
import { Text } from "components/Text";
import { Link, RouterLinkProps } from "components/Link";
/* modules */
import dayJs from "dayjs";
/* helpers */
import { routeTo } from "helpers/routeTo";
import { uniqueId } from "helpers/uniqueId";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { CommentBoxProps } from "./CommentBox.types";
/* styles */
import s from "./CommentBox.module.scss";

export const CommentBox: FC<CommentBoxProps> = ({
    id: commentId,
    body,
    date,
    username,
    onDelete = defaultOnDelete,
}) => {
    const relativeFakeTime = dayJs().from(date, true);

    return (
        <div className={s.box}>
            {/* navigating to user profile page */}
            <Link<RouterLinkProps>
                permission="profile.readPublicUserProfile"
                to={routeTo("publicUserProfile", { userId: uniqueId() })}
            >
                <img className={s.profileImage} src={BookImage} />
            </Link>

            <div className={s.header}>
                <p className={s.description}>
                    <Link<RouterLinkProps>
                        permission="profile.readPublicUserProfile"
                        to={routeTo("publicUserProfile", {
                            userId: uniqueId(),
                        })}
                    >
                        {username}
                    </Link>
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
