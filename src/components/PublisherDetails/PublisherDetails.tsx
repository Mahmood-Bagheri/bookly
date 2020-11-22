import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { PublisherDetailsComponentProps } from "./PublisherDetails.types";
/* styles */
import s from "./PublisherDetails.module.scss";

export const PublisherDetails: FunctionComponent<PublisherDetailsComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(s.box, className)}></div>;
};
