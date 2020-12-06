import * as React from "react";
/* components */
import { Input as AntDesignInput } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputProps, PasswordProps, TextAreaProps } from "antd/lib/input";

// todo -> generalize this file

export const Text = React.forwardRef<any, InputProps>((props, ref) => {
    return (
        <AntDesignInput
            ref={ref}
            className={clsx(s.input, props.className)}
            {...props}
        />
    );
});

export const Textarea = React.forwardRef<any, TextAreaProps>((props, ref) => {
    return (
        <AntDesignInput.TextArea
            className={clsx(s.textarea, props.className)}
            ref={ref}
            {...props}
        />
    );
});

export const Password = React.forwardRef<any, PasswordProps>((props, ref) => {
    return (
        <AntDesignInput.Password
            className={clsx(s.textarea, props.className)}
            ref={ref}
            {...props}
        />
    );
});
