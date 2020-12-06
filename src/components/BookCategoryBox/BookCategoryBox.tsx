import React, { FunctionComponent } from "react";
/* components */
import { Col } from "components/Col";
import { Text } from "components/Text";
import { Link, RouterLinkProps } from "components/Link";

/* modules */
import clsx from "classnames";
import { uniqueId } from "helpers/uniqueId";
/* helpers */
/* types */
import { BookCategoryBoxComponentProps } from "./BookCategoryBox.types";
/* styles */
import s from "./BookCategoryBox.module.scss";
import { routeTo } from "helpers/routeTo";

export const BookCategoryBox: FunctionComponent<BookCategoryBoxComponentProps> = props => {
    const { className, id: categoryId, categoryTitle, ...restProps } = props;

    return (
        <Col xl={3} sm={6} className="mb-3">
            <Link<RouterLinkProps>
                permission="routes.category"
                to={routeTo("category", { categoryId })}
            >
                <div
                    className={clsx(s.box, `shadow`, className)}
                    {...restProps}
                >
                    <div
                        className={s.image}
                        style={{
                            background: `linear-gradient(
                                to left,
                                rgba(0, 0, 0, 0.3),
                                rgba(0, 0, 0, 0.3)
                            ), url(https://source.unsplash.com/500x500/?book&sig=${uniqueId()})`,
                        }}
                    >
                        <Text className={s.title}>{categoryTitle}</Text>
                    </div>
                </div>
            </Link>
        </Col>
    );
};
