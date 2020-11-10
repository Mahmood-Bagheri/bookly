import React from "react";
/* components */
import { LikeButton } from "components/LikeButton";
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
        canLike,
        title,
        author,
        imageSrc = BookImage,
        ...restProps
    } = props;

    const renderLikeButton = () => {
        if (canLike) {
            return (
                <div className={s.actions}>
                    {canLike && (
                        <LikeButton
                            onLikeStateChange={onLikeStateChange}
                            initialLikeState={initialLikeState}
                        />
                    )}
                </div>
            );
        }
        return null;
    };

    return (
        <div className={`${s.box} shadow`} {...restProps}>
            <img className={s.image} src={BookImage} />
            <div className={s.content}>
                <div>
                    <div className={s.title}>{title}</div>
                </div>
                <div>
                    <div className={s.author}>{author}</div>
                    <div className={s.authorTitle}>نویسنده</div>
                </div>
            </div>
            {renderLikeButton()}
        </div>
    );
};
