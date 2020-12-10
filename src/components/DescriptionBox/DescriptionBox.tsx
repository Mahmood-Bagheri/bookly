import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { DescriptionBoxProps } from "./DescriptionBox.types";
/* styles */
import s from "./DescriptionBox.module.scss";

export const DescriptionBox: FC<DescriptionBoxProps> = ({
    title,
    description,
    className,
}) => {
    return (
        <div className={clsx(s.box, `shadow`, className)}>
            <p className={s.title}>{title}</p>
            <p className={s.body}>{description}</p>
        </div>
    );
};
