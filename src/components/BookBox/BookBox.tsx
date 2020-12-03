import React, { useRef } from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { Image } from "components/Image";
import { DeleteButton } from "components/DeleteButton";
import { Text } from "components/Text";
/* modules */
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";
import { useDeleteBook, useLikeBook } from "hooks/operations";
import { useBooleanState } from "hooks/useBooleanState";
import { useOverflow } from "hooks/useOverflow";
/* assets */
/* types */
import { BookProps } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";

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
    const [deleteBook, { isLoading: deleteBookIsLoading }] = useDeleteBook();

    const handleLikeChange = (likeState: boolean, bookId: string) => {
        like({ likeState, bookId });
    };

    const handleDeleteBook = (bookId: string) => {
        deleteBook({ bookId });
    };

    const titleRef = useRef<HTMLParagraphElement>(null!);
    const authorRef = useRef<HTMLParagraphElement>(null!);
    const authorSubtitleRef = useRef<HTMLParagraphElement>(null!);
    const { refXOverflowing: titleIsOverflowing } = useOverflow(titleRef);
    const { refXOverflowing: authorIsOverflowing } = useOverflow(authorRef);
    const { refXOverflowing: authorSubtitleIsOverflowing } = useOverflow(
        authorSubtitleRef
    );

    return (
        <div className={`${s.box} shadow`} {...restProps}>
            <div className={s.content}>
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
                        {author}
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
            <Link to={routeTo("book", { bookId })}>
                <Image className={s.image} src={imageSrc} />
            </Link>

            <div className={s.actions}>
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
