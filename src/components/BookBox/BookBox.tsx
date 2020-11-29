import React from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { Image } from "components/Image";
import { Col } from "components/Col";
import { DeleteButton } from "components/DeleteButton";
/* modules */
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";
import { useLikeBook } from "hooks/operations";
import { uniqueId } from "helpers/uniqueId";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BookProps } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";

const defaultProps: BookProps = {
    id: uniqueId(),
    title: "",
    author: "",
    imageSrc: BookImage,
    initialLikeState: false,
    onDeleteBook: bookId => console.log(`${bookId} deletetion`),
};

export const BookBox: React.FC<BookProps> = ({
    initialLikeState,
    title,
    author,
    imageSrc,
    onDeleteBook,
    id: bookId,
    ...restProps
}) => {
    const [like, { isLoading: likeIsLoading }] = useLikeBook();

    const onLikeChange = (likeState: boolean, bookId: string) => {
        like({ likeState, bookId });
    };

    return (
        <Col xl={3} sm={6} className="mb-3">
            <div className={`${s.box} shadow`} {...restProps}>
                <Link to={routeTo("book", { bookId })}>
                    <Image className={s.image} src={imageSrc} />
                </Link>
                <div className={s.content}>
                    <div className={s.title}>{title}</div>
                    <div>
                        <div className={s.author}>{author}</div>
                        <div className={s.authorTitle}>نویسنده</div>
                    </div>
                </div>

                <div className={s.actions}>
                    <LikeButton
                        permission="books.like"
                        data-testid="likeButton"
                        onChange={likeState => onLikeChange(likeState, bookId)}
                        initialLikeState={initialLikeState}
                        loading={likeIsLoading}
                    />
                    <DeleteButton
                        permission="books.delete"
                        data-testid="deleteButton"
                        title="برای حذف کردن این کتاب مطمئن هستید ؟"
                        onConfirm={() => onDeleteBook(bookId)}
                        className={s.deleteIcon}
                    />
                </div>
            </div>
        </Col>
    );
};

BookBox.defaultProps = defaultProps;
