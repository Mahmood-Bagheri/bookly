import React, { FunctionComponent } from "react";
/* components */
import { Col } from "components/Col";
import { Image } from "components/Image";
/* modules */
import clsx from "classnames";
/* helpers */
/* types */
import { BookCategoryBoxComponentProps } from "./BookCategoryBox.types";
/* styles */
import s from "./BookCategoryBox.module.scss";
import { Link } from "react-router-dom";
import { routeTo } from "helpers/routeTo";

export const BookCategoryBox: FunctionComponent<BookCategoryBoxComponentProps> = props => {
    const { className, id: categoryId, categoryTitle, ...restProps } = props;

    return (
        <Col xl={3} sm={6} className="mb-3">
            <Link to={routeTo("category", { categoryId })}>
                <div
                    className={clsx(s.box, `shadow`, className)}
                    {...restProps}
                >
                    <div
                        className={s.image}
                        style={{
                            background: `linear-gradient(
                                to left,
                                rgba(0, 0, 0, 0.4),
                                rgba(0, 0, 0, 0.4)
                            ), url(https://source.unsplash.com/500x500/?book&sig=${categoryId})`,
                        }}
                    >
                        <span className={s.title}>{categoryTitle}</span>
                    </div>
                </div>
            </Link>
        </Col>
    );
};
