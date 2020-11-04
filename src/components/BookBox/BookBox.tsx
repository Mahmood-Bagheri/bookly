import React, { FunctionComponent } from "react";
import { BookBoxComponentProps } from "./BookBox.types";
import BookImage from "assets/images/book.jpg";
import s from "./BookBox.module.scss";

export const BookBox: FunctionComponent<BookBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <div className={s.publisher}>فروشگاه مبل توکا</div>
            <img className={s.image} src={BookImage} />
            <div className={s.content}>
                <div>
                    <div className={s.title}>مبل آنتیک</div>
                    <div className={s.code}>aq-128</div>
                </div>
                <div className={s.priceWrap}>
                    <div className={s.price}>12,000</div>
                    <div className={s.priceUnit}>تومان</div>
                </div>
            </div>
        </div>
    );
};
