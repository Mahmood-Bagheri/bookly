import React, { FunctionComponent } from "react";
/* components */
import { Image } from "components/Image";
import { Text } from "components/Text";
/* assets */
import BookImage from "assets/images/book.jpg";
/* modules */
import clsx from "classnames";
/* types */
import { BookDetailsBoxComponentProps } from "./BookDetailsBox.types";
/* styles */
import s from "./BookDetailsBox.module.scss";
import { BooksCarousel } from "components/BooksCarousel";

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = ({
    title,
    author,
    imageSrc = BookImage,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className="d-flex justify-content-between align-items-center p-3">
                <Text className={s.title}>{title}</Text>
                <Text className={s.author}>{author}</Text>
            </div>
            <BooksCarousel />
            {/* <Image className={s.image} src={imageSrc} /> */}
        </div>
    );
};
