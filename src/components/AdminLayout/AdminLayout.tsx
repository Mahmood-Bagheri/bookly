import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { AdminLayoutComponentProps } from "./AdminLayout.types";
/* styles */
import s from "./AdminLayout.module.scss";

export const AdminLayout: FunctionComponent<AdminLayoutComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(s.box, className)}></div>;
};
