import React, { FunctionComponent } from "react";
/* modules */
import clsx from "classnames";
/* types */
import { BookDescriptionTextComponentProps } from "./BookDescriptionText.types";
/* styles */
import s from "./BookDescriptionText.module.scss";

export const BookDescriptionText: FunctionComponent<BookDescriptionTextComponentProps> = ({
    description,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <p className={s.title}>مشخصات کتاب</p>
            <p className={s.body}>{description}</p>
        </div>
    );
};
