import React, { FunctionComponent } from "react";
import { DeleteButton } from "components/DeleteButton";
import { CommentBoxComponentProps } from "./CommentBox.types";
import Image from "assets/images/book.jpg";
import { CommentBoxBody } from "components/CommentBoxBody";
import dayJs from "dayjs";
import { randomDate } from "helpers/randomDate";
import s from "./CommentBox.module.scss";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = props => {
    const randomFakeDate = randomDate(new Date("2020/1/1"));
    const relativeFakeTime = dayJs().from(randomFakeDate, true);

    return (
        <div className={s.box}>
            <img className={s.profileImage} src={Image} />

            <div className={s.header}>
                <div className={s.description}>
                    شهرزاد
                    {"  "}
                    {relativeFakeTime} پیش گفته
                </div>
            </div>

            <CommentBoxBody>
                سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده.
            </CommentBoxBody>

            <div className={s.actions}>
                <DeleteButton />
            </div>
        </div>
    );
};
