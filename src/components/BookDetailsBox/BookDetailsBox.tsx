import React, { FunctionComponent } from "react";
import { BooksCarousel } from "components/BooksCarousel";
import { BookDetailsBoxComponentProps } from "./BookDetailsBox.types";
import s from "./BookDetailsBox.module.scss";

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <div className="p-3">
                <p className={s.title}>کتاب جز از کل نوشته استیو تولتز</p>
                <div className={s.code}>GCP-11299</div>
            </div>
            <BooksCarousel />
        </div>
    );
};
