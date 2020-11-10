import React, { FunctionComponent } from "react";
/* components */
import { Spin } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { LoadingIndicatorComponentProps } from "./LoadingIndicator.types";
/* styles */
import s from "./LoadingIndicator.module.scss";

export const LoadingIndicator: FunctionComponent<LoadingIndicatorComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <div className={clsx(s.box, className)}>
            <Spin size="large" />
        </div>
    );
};
