import React, { FunctionComponent } from "react";
import { DeleteButton } from "components/DeleteButton";
import { CommentBoxComponentProps } from "./CommentBox.types";
import Image from "assets/images/book.jpg";
import s from "./CommentBox.module.scss";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <div className={s.profileImage} />

            <div className={s.header}>
                <div className={s.description}>محمود باقری میگه</div>
                <div className={s.time}>دیروز</div>
            </div>

            <div className={s.body}>
                سلام وقت به خیر من خیلی وقته سفارش دادم هنوز به دستم نرسیده
            </div>

            <div className={s.actions}>
                <DeleteButton />
                <div className={s.reply}>پاسخ دادن</div>
            </div>
        </div>
    );
};
