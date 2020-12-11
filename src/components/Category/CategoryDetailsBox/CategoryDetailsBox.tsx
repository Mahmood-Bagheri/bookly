import React, { FC } from "react";
/* components */
import { CategoryDetailsBoxShimmer } from "./CategoryDetailsBoxShimmer";
import { Text } from "components/Text";
import { Image } from "components/Image";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { CategoryDetailsBoxProps } from "./CategoryDetailsBox.types";
/* styles */
import s from "./CategoryDetailsBox.module.scss";

export const CategoryDetailsBox: FC<CategoryDetailsBoxProps> = ({
    className,
    categoryTitle,
    description,
    imageSrc,
    loading = false,
    ...restProps
}) => {
    if (loading) {
        return <CategoryDetailsBoxShimmer />;
    }
    return (
        <div
            className={clsx(s.box, `shadow p-4 mb-4`, className)}
            {...restProps}
        >
            <div className="d-flex flex-column align-items-center">
                <Image className={s.categoryImage} src={imageSrc} />
                <Text className={s.name}>{categoryTitle}</Text>
            </div>
            <Text className={clsx(s.description)}>{description}</Text>
        </div>
    );
};
