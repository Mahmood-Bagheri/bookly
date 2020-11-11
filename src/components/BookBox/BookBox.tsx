import React from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { Image } from "components/Image";

/* assets */
import BookImage from "assets/images/book.jpg";
/* types */
import { BookBoxComponentType } from "./BookBox.types";
/* styles */
import s from "./BookBox.module.scss";
import { AclService } from "services/rbac";

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

    return (
        <div className={`${s.box} shadow`} {...restProps}>
            <Image className={s.image} src={imageSrc} />
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
                <AclService permission="book.like">
                    <LikeButton
                        onLikeStateChange={onLikeStateChange}
                        initialLikeState={initialLikeState}
                    />
                </AclService>
            </div>
        </div>
    );
};
