import React, { FC, Fragment, FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { LayoutProps } from "./Layout.types";
/* styles */
import s from "./Layout.module.scss";
import { TopBar } from "components/TopBar";

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <TopBar />
            {children}
        </div>
    );
};
