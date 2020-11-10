import React, { FunctionComponent } from "react";
/* components */
import { BooksCarousel } from "components/BooksCarousel";
import { Image } from "components/Image";
/* assets */
import BookImage from "assets/images/book.jpg";
/* modules */
import clsx from "classnames";
/* types */
import { BookDetailsBoxComponentProps } from "./BookDetailsBox.types";
/* styles */
import s from "./BookDetailsBox.module.scss";

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = ({
    title,
    author,
    imageSrc = BookImage,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className="d-flex justify-content-between align-items-center p-3">
                <p className={s.title}>{title}</p>
                <div className={s.author}>{author}</div>
            </div>
            <Image className={s.image} src={imageSrc} />
        </div>
    );
};
