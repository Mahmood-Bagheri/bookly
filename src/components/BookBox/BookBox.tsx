import React from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { Image } from "components/Image";
import { Col } from "components/Col";
import { DeleteButton } from "components/DeleteButton";
/* modules */
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";
import { AclService } from "services/rbac";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BookBoxComponentType } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";

export const BookBox: BookBoxComponentType = props => {
    const {
        onLikeStateChange,
        initialLikeState,
        title,
        author,
        imageSrc = BookImage,
        onDeleteBook = defaultOnDeleteBook,
        id: bookId,
        ...restProps
    } = props;

    return (
        <Col xl={3} sm={6} className="mb-3">
            <div className={`${s.box} shadow`} {...restProps}>
                <Link to={routeTo("book", { bookId })}>
                    <Image className={s.image} src={imageSrc} />
                </Link>
                <div className={s.content}>
                    <div>
                        <div className={s.title}>{title}</div>
                    </div>
                    <div>
                        <div className={s.author}>{author}</div>
                        <div className={s.authorTitle}>نویسنده</div>
                    </div>
                </div>
                <div className={s.actions}>
                    <AclService permission="books.like">
                        <LikeButton
                            onLikeStateChange={onLikeStateChange}
                            initialLikeState={initialLikeState}
                        />
                    </AclService>
                    <AclService permission="books.delete">
                        <DeleteButton
                            title="برای حذف کردن این کتاب مطمئن هستید ؟"
                            onConfirm={() => onDeleteBook(bookId)}
                            className={s.deleteIcon}
                        />
                    </AclService>
                </div>
            </div>
        </Col>
    );
};

const defaultOnDeleteBook = (bookId: string) => {
    console.log(`${bookId} deleteion`);
};
