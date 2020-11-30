import React, { FunctionComponent, HtmlHTMLAttributes } from "react";
/* components */
import { Input as AntDesignInput } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputComponentProps } from "./Input.types";

export const Input = React.forwardRef<any, InputComponentProps>(
    ({ className, ...restProps }, ref) => {
        return (
            <AntDesignInput
                ref={ref}
                className={clsx(s.input, className)}
                {...restProps}
            />
        );
    }
);

/* todo -> make the component general as well */
type InputProps = JSX.IntrinsicElements["input"];
type TextareaProps = JSX.IntrinsicElements["textarea"];
function isPropsForTextareaElement(
    props: InputProps | TextareaProps
): props is TextareaProps {
    return "rows" in props;
}

export const TextareaInputGeneralComponent = (
    props: InputProps | TextareaProps
) => {
    if (isPropsForTextareaElement(props)) {
        return <textarea {...props} />;
    } else {
        return <input {...props} />;
    }
}; // optionally use a custom type guard
