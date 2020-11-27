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
import { useLikeBook } from "services/api/operations";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BookBoxComponentProps } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";

export const BookBox: React.FC<BookBoxComponentProps> = ({
    initialLikeState,
    title,
    author,
    imageSrc = BookImage,
    onDeleteBook = defaultOnDeleteBook,
    id: bookId,
    ...restProps
}) => {
    const [like, { isLoading: likeIsLoading }] = useLikeBook();

    const onLikeStateChange = (likeState: boolean, bookId: string) => {
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
                    <AclService permission="books.like">
                        <LikeButton
                            data-testid="likeButton"
                            onLikeStateChange={likeState =>
                                onLikeStateChange(likeState, bookId)
                            }
                            initialLikeState={initialLikeState}
                            loading={likeIsLoading}
                        />
                    </AclService>
                    <AclService permission="books.delete">
                        <DeleteButton
                            data-testid="deleteButton"
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
