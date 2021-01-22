import React, { useRef } from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { Image } from "components/Image";
import { DeleteButton } from "components/DeleteButton";
import { Text } from "components/Text";
/* modules */
import { Link, RouterLinkProps } from "components/Link";
import { routeTo } from "helpers/routeTo";
import { useDeleteBook, useLikeBook } from "hooks/operations";
import { useOverflow } from "hooks/useOverflow";
/* assets */
/* types */
import { BookProps } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";

export const BookBox: React.FC<BookProps> = ({
    title,
    author,
    image,
    onDeleteBook,
    _id: bookId = "Salam",
    // category,
    // comments,
    // createdAt,
    // updatedAt,
    // isPublished,
    // submittedBy,
    // description,
    ...restProps
}) => {
    const [like, { isLoading: likeIsLoading }] = useLikeBook();
    const [deleteBook, { isLoading: deleteBookIsLoading }] = useDeleteBook();
    /* FIXME initialLikeState */
    const initialLikeState = false;
    const handleLikeChange = (likeState: boolean, bookId: string) => {
        like({ likeState, bookId });
    };

    const handleDeleteBook = (bookId: string) => {
        deleteBook({ bookId });
    };

    const titleRef = useRef<HTMLParagraphElement>(null!);
    const authorRef = useRef<HTMLParagraphElement>(null!);
    const authorSubtitleRef = useRef<HTMLParagraphElement>(null!);
    const [titleIsOverflowing] = useOverflow(titleRef);
    const [authorIsOverflowing] = useOverflow(authorRef);
    const [authorSubtitleIsOverflowing] = useOverflow(authorSubtitleRef);

    return (
        <div className={`${s.box} shadow`}>
            <div
                className={s.content}
                id="content"
                aria-details="contains the header of our bookbox"
            >
                <Text
                    ref={titleRef}
                    withTooltip={titleIsOverflowing}
                    className={`${s.title} truncate`}
                >
                    {title}
                </Text>
                <div className={s.authorWrap}>
                    <Text
                        ref={authorRef}
                        withTooltip={authorIsOverflowing}
                        className={`${s.author} truncate`}
                    >
                        {author.name}
                    </Text>
                    <Text
                        ref={authorSubtitleRef}
                        withTooltip={authorSubtitleIsOverflowing}
                        className={s.authorTitle}
                    >
                        نویسنده
                    </Text>
                </div>
            </div>
            <div className="p-1">
                <Link<RouterLinkProps>
                    permission="books.readSingle"
                    to={routeTo("book", { bookId })}
                >
                    <Image
                        className={s.image}
                        src={`${process.env.REACT_APP_API_URL}/${image?.filename}`}
                    />
                </Link>
            </div>

            <div
                className={s.actions}
                id="actions"
                aria-details="like and delete button of bookbox"
            >
                <LikeButton
                    permission="books.like"
                    data-testid="likeButton"
                    onChange={likeState => handleLikeChange(likeState, bookId)}
                    initialLikeState={initialLikeState}
                    loading={likeIsLoading}
                />
                <DeleteButton
                    permission="books.delete"
                    data-testid="deleteButton"
                    title="برای حذف کردن این کتاب مطمئن هستید ؟"
                    onConfirm={() => handleDeleteBook(bookId)}
                    className={s.deleteIcon}
                    loading={deleteBookIsLoading}
                />
            </div>
        </div>
    );
};
