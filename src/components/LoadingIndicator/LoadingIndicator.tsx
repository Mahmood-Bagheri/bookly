import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { LoadingIndicatorComponentProps } from "./LoadingIndicator.types";
/* styles */
import s from "./LoadingIndicator.module.scss";
import { Spinner } from "components/Spinner";

export const LoadingIndicator: FunctionComponent<LoadingIndicatorComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <div className={clsx(s.box, className)}>
            <Spinner height={50} width={50} />
        </div>
    );
};
