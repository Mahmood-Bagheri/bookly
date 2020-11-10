import React, { FunctionComponent } from "react";
/* components */
import { Input } from "antd";
/* modules */
import clsx from "classnames";
/* types */
import { TextareaComponentProps } from "./Textarea.types";
/* styles */
import s from "./Textarea.module.scss";

export const Textarea: FunctionComponent<TextareaComponentProps> = ({
    className,
    ...restProps
}) => {
    return (
        <Input.TextArea className={clsx(s.input, className)} {...restProps} />
    );
};
