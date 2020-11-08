import React from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { BookmarkButton } from "components/BookmarkButton";
/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BookBoxComponentType } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";

export const BookBox: BookBoxComponentType = props => {
    const {
        onBookmarkStateChange,
        onLikeStateChange,
        initialBookmarkState,
        initialLikeState,
        ...restProps
    } = props;

    return (
        <div className={`${s.box} shadow`} {...restProps}>
            <img className={s.image} src={BookImage} />
            <div className={s.content}>
                <div>
                    <div className={s.title}>جز از کل</div>
                </div>
                <div>
                    <div className={s.author}>استیو تولتز</div>
                    <div className={s.authorTitle}>نویسنده</div>
                </div>
            </div>
            <div className={s.actions}>
                <LikeButton
                    onLikeStateChange={onLikeStateChange}
                    initialLikeState={initialLikeState}
                />
                {/* <BookmarkButton
                    onBookmarkStateChange={onBookmarkStateChange}
                    initialBookmarkState={initialBookmarkState}
                /> */}
            </div>
        </div>
    );
};
