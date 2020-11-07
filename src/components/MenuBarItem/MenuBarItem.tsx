import React, { FunctionComponent } from "react";
/* components */
/* modules */
import { NavLink } from "react-router-dom";
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
            <NavLink activeClassName={s.activeMenuItem} to={link}>
                {title}
            </NavLink>
        </span>
    );
};
