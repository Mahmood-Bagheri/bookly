import React, { FC } from "react";
/* components */
import { MenuBarItem, MenuItem } from "components/MenuBarItem";
import { GenericGrid } from "components/GenericGrid";

/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { MenuBarComponentProps } from "./MenuBar.types";
/* styles */
import s from "./MenuBar.module.scss";

export const MenuBar: FC<MenuBarComponentProps> = props => {
    const { className, menu, ...restProps } = props;
    return (
        <div className={clsx(s.box, className)} {...restProps}>
            <GenericGrid<MenuItem>
                items={menu!}
                renderItem={renderMenuItem}
                withRow={false}
            />
        </div>
    );
};

const renderMenuItem = ({ title, link, permission, exact }: MenuItem) => (
    <MenuBarItem
        key={link.toString()}
        permission={permission}
        title={title}
        link={link}
        exact={exact}
    />
);
