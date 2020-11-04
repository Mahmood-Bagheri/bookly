import React, { FunctionComponent } from "react";
import { BookBoxComponentProps } from "./BookBox.types";
import BookImage from "assets/images/book.jpg";
import { LikeButton } from "components/LikeButton";
import { BookmarkButton } from "components/BookmarkButton";
import s from "./BookBox.module.scss";

export const BookBox: FunctionComponent<BookBoxComponentProps> = props => {
    const {
        onBookmarkStateChange,
        onLikeStateChange,
        initialBookmarkState,
        initialLikeState,
        ...restProps
    } = props;

    return (
        <div className={s.box} {...restProps}>
            <img className={s.image} src={BookImage} />
            <div className={s.content}>
                <div>
                    <div className={s.title}>جز از کل</div>
                    <div className={s.code}>aq-128</div>
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
                <BookmarkButton
                    onBookmarkStateChange={onBookmarkStateChange}
                    initialBookmarkState={initialBookmarkState}
                />
            </div>
        </div>
    );
};
