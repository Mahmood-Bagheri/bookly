import React, { FunctionComponent } from "react";
/* components */
import { BooksCarousel } from "components/BooksCarousel";
/* modules */
import clsx from "classnames";
/* types */
import { BookDetailsBoxComponentProps } from "./BookDetailsBox.types";
/* styles */
import s from "./BookDetailsBox.module.scss";

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = props => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className="d-flex justify-content-between align-items-center p-3">
                <p className={s.title}>کتاب جز از کل </p>
                <div className={s.author}>استیو تولتز</div>
            </div>
            <BooksCarousel />
        </div>
    );
};
