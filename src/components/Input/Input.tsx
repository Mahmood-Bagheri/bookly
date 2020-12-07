import * as React from "react";
/* components */
import { Input, InputNumber } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputProps, PasswordProps, TextAreaProps } from "antd/lib/input";
import { TextAreaRef } from "antd/lib/input/TextArea";
import { InputNumberProps } from "antd/lib/input-number";

/* 
    TODO === 1- generalize this file, 2- remove all this any things
*/
export const Text = React.forwardRef<Input, InputProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <Input
                allowClear
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
                allowClear
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

// todo -> move width: 100% to a file
export const Number = React.forwardRef<any, InputNumberProps>(
    ({ className, style, ...restProps }, ref) => {
        return (
            <InputNumber
                style={{ ...style, width: "100%" }}
                className={clsx(s.input, className)}
                ref={ref}
                {...restProps}
            />
        );
    }
);
