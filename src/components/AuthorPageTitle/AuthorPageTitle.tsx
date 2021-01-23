import React, { FC } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { AuthorPageTitleProps } from "./AuthorPageTitle.types";
/* styles */
import s from "./AuthorPageTitle.module.scss";

export const AuthorPageTitle: FC<AuthorPageTitleProps> = ({
    className,
    ...restProps
}) => {
    return <div className={clsx(s.box, className)} {...restProps} />;
};
