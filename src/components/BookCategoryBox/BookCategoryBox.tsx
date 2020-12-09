import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
import { Link, RouterLinkProps } from "components/Link";
/* modules */
import clsx from "classnames";
/* helpers */
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";
import { routeTo } from "helpers/routeTo";
/* types */
import { BookCategoryBoxProps } from "./BookCategoryBox.types";
/* styles */
import s from "./BookCategoryBox.module.scss";
import { Image } from "components/Image";

export const BookCategoryBox: FC<BookCategoryBoxProps> = ({
    id: categoryId,
    categoryTitle,
    className,
}) => {
    return (
        <Link<RouterLinkProps>
            permission="routes.category"
            to={routeTo("category", { categoryId })}
        >
            <div className={clsx(s.box, "shadow", className)}>
                <picture className={s.picture}>
                    <Image alt={categoryTitle} src={generateFakeImageUrl()} />
                </picture>
                <Text className={s.title}>{categoryTitle}</Text>
            </div>
        </Link>
    );
};
