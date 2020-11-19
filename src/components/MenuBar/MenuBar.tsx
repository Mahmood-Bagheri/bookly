import React, { FunctionComponent } from "react";
/* components */
import { MenuBarItem, MenuItem } from "components/MenuBarItem";

/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { MenuBarComponentProps } from "./MenuBar.types";
/* styles */
import s from "./MenuBar.module.scss";

export const MenuBar: FunctionComponent<MenuBarComponentProps> = props => {
    const { className, menu, ...restProps } = props;
    return (
        <div className={clsx(s.box, className)} {...restProps}>
            {menu?.map(renderMenuItem)}
        </div>
    );
};

const renderMenuItem = ({ title, link }: MenuItem) => (
    <MenuBarItem title={title} link={link} />
);
