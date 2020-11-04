import React, { FunctionComponent } from "react";
import { BooksCarousel } from "components/BooksCarousel";
import { BookDetailsCountBox } from "components/BookDetailsCountBox";
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

            <div className="p-3">
                <BookDetailsCountBox
                    type="like"
                    count={150}
                    description="نفر این پست را پسندیده اند"
                />
                <BookDetailsCountBox
                    type="comment"
                    count={45}
                    description="نفر در مورد این پست نظر داده اند"
                />
            </div>
        </div>
    );
};
