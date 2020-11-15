import React from "react";
/* components */
import { LikeButton } from "components/LikeButton";
import { Image } from "components/Image";
import { Col } from "components/Col";
/* modules */
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";
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
        <Col xl={3} sm={6} className="mb-3">
            <Link to={routeTo("error", { id: "Salam" })}>
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
                    <AclService permission="book.like">
                        <div className={s.actions}>
                            <LikeButton
                                onLikeStateChange={onLikeStateChange}
                                initialLikeState={initialLikeState}
                            />
                        </div>
                    </AclService>
                </div>
            </Link>
        </Col>
    );
};
