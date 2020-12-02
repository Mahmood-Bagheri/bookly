import React, { FunctionComponent } from "react";
/* components */
import { Drawer } from "components/Drawer";
import { MenuBarItem } from "components/MenuBarItem";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { MainDrawerComponentProps } from "./MainDrawer.types";
/* styles */
import s from "./MainDrawer.module.scss";

export const MainDrawer: FunctionComponent<MainDrawerComponentProps> = props => {
    return (
        <Drawer {...props}>
            <div className="d-flex flex-column">
                {/* <MenuBarItem
                    className="mb-3"
                    title="کاربران"
                    link="/path/to/somewhere"
                />
                <MenuBarItem
                    className="mb-3"
                    title="کتاب ها"
                    link="/path/to/somewhere"
                />
                <MenuBarItem
                    className="mb-3"
                    title="کاربران"
                    link="/path/to/somewhere"
                />
                <MenuBarItem
                    className="mb-3"
                    title="کاربران"
                    link="/path/to/somewhere"
                /> */}
            </div>
        </Drawer>
    );
};
