import React, { FunctionComponent } from "react";
/* components */
import { Button as AntDesignButton } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { ButtonComponentProps } from "./Button.types";
/* styles */
import s from "./Button.module.scss";

export const Button: FunctionComponent<ButtonComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <AntDesignButton className={clsx(s.button, className)} {...restProps} />
    );
};
