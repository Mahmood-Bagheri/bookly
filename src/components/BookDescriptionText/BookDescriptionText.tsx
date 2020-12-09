import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* types */
import { BookDescriptionTextProps } from "./BookDescriptionText.types";
/* styles */
import s from "./BookDescriptionText.module.scss";

export const BookDescriptionText: FC<BookDescriptionTextProps> = ({
    description,
    title = "مشخصات کتاب",
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <Text className={s.title}>{title}</Text>
            <Text className={s.body}>{description}</Text>
        </div>
    );
};
