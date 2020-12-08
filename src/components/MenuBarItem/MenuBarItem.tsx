import React, { FunctionComponent } from "react";
/* components */
/* modules */
import { Link, RouterLinkProps } from "components/Link";
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { MenuBarItemComponentProps } from "./MenuBarItem.types";
/* styles */
import s from "./MenuBarItem.module.scss";

export const MenuBarItem: FunctionComponent<MenuBarItemComponentProps> = props => {
    const {
        className,
        permission,
        title,
        link,
        exact = false,
        ...restProps
    } = props;
    return (
        <Link<RouterLinkProps>
            permission={permission}
            exact={exact}
            activeClassName={s.activeMenuItem}
            to={link}
            className={clsx(s.menuItem, className)}
        >
            <span {...restProps}>{title}</span>
        </Link>
    );
};
