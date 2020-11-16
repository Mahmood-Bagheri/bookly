import React, { FunctionComponent } from "react";
/* components */
import { MenuBar, MenuBarProps } from "components/MenuBar";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { TopBarComponentProps } from "./TopBar.types";
/* styles */
import s from "./TopBar.module.scss";
import __ROUTES__ from "constants/routes";

export const TopBar: FunctionComponent<TopBarComponentProps> = props => {
    const { className, title, ...restProps } = props;

    const menu: MenuBarProps["menu"] = [
        { title: "خانه", link: __ROUTES__.dashboardIntro },
        { title: "ثبت نام", link: __ROUTES__.login },
        { title: "ورود", link: __ROUTES__.user },
    ];

    return (
        <div className={clsx(s.topbar, className)} {...restProps}>
            <h1 className={s.title}>{title}</h1>
            <MenuBar menu={menu} />
        </div>
    );
};
