import * as React from "react";
/* components */
import { Input } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputProps, PasswordProps, TextAreaProps } from "antd/lib/input";
import { TextAreaRef } from "antd/lib/input/TextArea";

/* 
    TODO === 1- generalize this file, 2- remove all this any things
*/

export const Text = React.forwardRef<Input, InputProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <Input
                ref={ref}
                className={clsx(s.input, className)}
                {...restProps}
            />
        );
    }
);

export const Textarea = React.forwardRef<TextAreaRef, TextAreaProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <Input.TextArea
                className={clsx(s.textarea, className)}
                ref={ref}
                {...restProps}
            />
        );
    }
);

export const Password = React.forwardRef<any, PasswordProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <Input.Password
                className={clsx(s.input, className)}
                ref={ref}
                {...restProps}
            />
        );
    }
);
