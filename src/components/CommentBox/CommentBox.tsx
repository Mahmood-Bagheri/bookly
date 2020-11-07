import React, { FunctionComponent } from "react";
/* components */
import { DeleteButton } from "components/DeleteButton";
import { CollapsibleText } from "components/CollapsibleText";
/* modules */
import dayJs from "dayjs";
/* assets */
import Image from "assets/images/book.jpg";
/* types */
import { CommentBoxComponentProps } from "./CommentBox.types";
/* styles */
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

            <CollapsibleText>{body}</CollapsibleText>

            <div className={s.actions}>
                <DeleteButton />
            </div>
        </div>
    );
};
