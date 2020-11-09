import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ContainerComponentProps } from "./Container.types";
/* styles */
import s from "./Container.module.scss";

export const Container: FunctionComponent<ContainerComponentProps> = ({
    children,
}) => {
    return <div className="container">{children}</div>;
};
