import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { PublisherBoxComponentProps } from "./PublisherBox.types";
/* styles */
import s from "./PublisherBox.module.scss";

export const PublisherBox: FunctionComponent<PublisherBoxComponentProps> = props => {
    const { className, ...restProps } = props;
    return <div className={clsx(s.box, className)}></div>;
};
