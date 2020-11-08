import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { GuestLayoutComponentProps } from "./GuestLayout.types";
/* styles */
import s from "./GuestLayout.module.scss";

export const GuestLayout: FunctionComponent<GuestLayoutComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(s.box, className)}></div>;
};
