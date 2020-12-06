import * as React from "react";
/* components */
import { Input } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputProps, PasswordProps, TextAreaProps } from "antd/lib/input";
import TextArea from "antd/lib/input/TextArea";

/* 
    TODO === 1- generalize this file, 2- remove all this any things
*/

export const Text = React.forwardRef<Input, InputProps>((props, ref) => {
    return (
        <Input
            ref={ref}
            className={clsx(s.input, props.className)}
            {...props}
        />
    );
});

export const Textarea = React.forwardRef<TextArea, TextAreaProps>(
    (props, ref) => {
        return (
            <Input.TextArea
                className={clsx(s.textarea, props.className)}
                ref={ref}
                {...props}
            />
        );
    }
);

export const Password = React.forwardRef<any, PasswordProps>((props, ref) => {
    return (
        <Input.Password
            className={clsx(s.textarea, props.className)}
            ref={ref}
            {...props}
        />
    );
});
