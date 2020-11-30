import React, { FunctionComponent } from "react";
/* components */
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* types */
import { BookDescriptionTextComponentProps } from "./BookDescriptionText.types";
/* styles */
import s from "./BookDescriptionText.module.scss";

export const BookDescriptionText: FunctionComponent<BookDescriptionTextComponentProps> = ({
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
