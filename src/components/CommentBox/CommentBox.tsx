import React, { FunctionComponent } from "react";
import { DeleteButton } from "components/DeleteButton";
import { CommentBoxComponentProps } from "./CommentBox.types";
import Image from "assets/images/book.jpg";
import s from "./CommentBox.module.scss";
import { CommentBoxBody } from "components/CommentBoxBody";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <div className={s.profileImage} />

            <div className={s.header}>
                <div className={s.description}>محمود باقری میگه</div>
                <div className={s.time}>دیروز</div>
            </div>

            <CommentBoxBody>
                سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده.
            </CommentBoxBody>

            <div className={s.actions}>
                <DeleteButton />
                <div className={s.reply}>پاسخ دادن</div>
            </div>
        </div>
    );
};
