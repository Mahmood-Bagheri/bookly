import React, { FunctionComponent } from "react";
/* compoents */
import { Spin } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { SpinnerComponentProps } from "./Spinner.types";
/* styles */
import s from "./Spinner.module.scss";

export const Spinner: FunctionComponent<SpinnerComponentProps> = props => {
    return <Spin {...props} />;
};
