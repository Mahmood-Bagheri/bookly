import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
import { Link, RouterLinkProps } from "components/Link";
import { Image } from "components/Image";
/* modules */
import clsx from "classnames";
/* helpers */
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";
import { routeTo } from "helpers/routeTo";
/* types */
import { CategoryBoxProps } from "./CategoryBox.types";
/* styles */
import s from "./CategoryBox.module.scss";

export const CategoryBox: FC<CategoryBoxProps> = ({
    _id: categoryId,
    title,
    className,
}) => {
    return (
        <Link<RouterLinkProps>
            permission="category.read"
            to={routeTo("category", { categoryId })}
        >
            <div className={clsx(s.box, "shadow", className)}>
                <picture className={s.picture}>
                    <Image alt={title} src={generateFakeImageUrl()} />
                </picture>
                <Text className={s.title}>{title}</Text>
            </div>
        </Link>
    );
};
