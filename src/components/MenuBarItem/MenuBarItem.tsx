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
    const { className, permission, title, link, ...restProps } = props;
    return (
        <span className={clsx(s.menuItem, className)} {...restProps}>
            <Link<RouterLinkProps>
                permission={permission}
                exact
                activeClassName={s.activeMenuItem}
                to={link}
            >
                {title}
            </Link>
        </span>
    );
};
