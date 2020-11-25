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
type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;
type TextareaProps = React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
>;
export const TextareaInputGeneralComponent = (
    props: InputProps | TextareaProps
) => {
    if (isPropsForAnchorElement(props)) {
        return <textarea {...props} />;
    } else {
        return <input {...props} />;
    }
}; // optionally use a custom type guard
function isPropsForAnchorElement(
    props: InputProps | TextareaProps
): props is TextareaProps {
    return "rows" in props;
}
