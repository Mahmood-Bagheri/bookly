import React, { FunctionComponent } from "react";
/* components */
/* modules */
import { Link } from "react-router-dom";
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { MenuBarItemComponentProps } from "./MenuBarItem.types";
/* styles */
import s from "./MenuBarItem.module.scss";

export const MenuBarItem: FunctionComponent<MenuBarItemComponentProps> = props => {
    const { className, title, link, ...restProps } = props;
    return (
        <span className={clsx(s.menuItem, className)} {...restProps}>
            <Link to={link}>{title}</Link>
        </span>
    );
};
