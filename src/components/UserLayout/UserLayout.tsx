import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { UserLayoutComponentProps } from "./UserLayout.types";
/* styles */
import s from "./UserLayout.module.scss";

export const UserLayout: FunctionComponent<UserLayoutComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(s.box, className)}></div>;
};
