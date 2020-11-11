import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { RowComponentProps } from "./Row.types";
/* styles */
import s from "./Row.module.scss";

export const Row: FunctionComponent<RowComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(`row`, className)} {...restProps} />;
};
