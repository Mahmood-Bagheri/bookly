import React, { FunctionComponent } from "react";
/* components */
import { Image } from "components/Image";
import { Text } from "components/Text";
import { BookImageCarousel } from "components/Book";
/* assets */
import BookImage from "assets/images/book.jpg";
/* modules */
import clsx from "classnames";
/* types */
import { BookDetailsBoxComponentProps } from "./BookDetailsBox.types";
/* styles */
import s from "./BookDetailsBox.module.scss";
import { EditButton } from "components/EditButton";
import { Link, RouterLinkProps } from "components/Link";
import { routeTo } from "helpers/routeTo";

export const BookDetailsBox: FunctionComponent<BookDetailsBoxComponentProps> = ({
    title,
    author,
    id: bookId,
    imageSrc = BookImage,
    releaseYear,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className="d-flex align-items-center p-3">
                <Link<RouterLinkProps>
                    permission="books.update"
                    to={routeTo("updateBook", { bookId })}
                >
                    <EditButton
                        className={s.editIcon}
                        permission="books.update"
                    />
                </Link>
                <Text className={s.title}>{title}</Text>
                <div className="author mr-auto">
                    <Text className={s.author}>{author}</Text>
                </div>
            </div>
            {/* <BookImageCarousel /> */}
            <Image className={s.image} src={imageSrc} />
            <div className="releaseYear-content d-flex justify-content-between p-3">
                <Text className={clsx(s.title)}>سال نشر</Text>
                <Text className={clsx(s.releaseYear)}>
                    سال نشر: {releaseYear}
                </Text>
            </div>
        </div>
    );
};
