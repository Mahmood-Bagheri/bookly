import React, { FunctionComponent } from "react";
import { BooksCarousel } from "components/BooksCarousel";
import { BookDetailsBoxComponentProps } from "./BookDetailsBox.types";
import s from "./BookDetailsBox.module.scss";

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = props => {
    return (
        <div className={s.box}>
            <div className="p-3">
                <p className={s.title}>کتاب جز از کل </p>
                <div className={s.author}>استیو تولتز</div>
            </div>
            <BooksCarousel />
        </div>
    );
};
