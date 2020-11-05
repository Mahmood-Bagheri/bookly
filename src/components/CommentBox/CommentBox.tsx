import React, { FunctionComponent } from "react";
import { DeleteButton } from "components/DeleteButton";
import { CommentBoxComponentProps } from "./CommentBox.types";
import Image from "assets/images/book.jpg";
import { CommentBoxBody } from "components/CommentBoxBody";
import dayJs from "dayjs";
import { randomDate } from "helpers/randomDate";
import s from "./CommentBox.module.scss";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = props => {
    const { body, date, username } = props;

    const relativeFakeTime = dayJs().from(date, true);

    return (
        <div className={s.box}>
            <img className={s.profileImage} src={Image} />

            <div className={s.header}>
                <div className={s.description}>
                    {username}
                    {"  "}
                    {relativeFakeTime} پیش گفته
                </div>
            </div>

            <CommentBoxBody>{body}</CommentBoxBody>

            <div className={s.actions}>
                <DeleteButton />
            </div>
        </div>
    );
};
