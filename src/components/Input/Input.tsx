import * as React from "react";
import { ElementRef, FC, forwardRef, RefObject, useRef } from "react";
/* components */
import { Input as AntDesignInput } from "antd";
/* modules */
import clsx from "classnames";
/* styles */
import s from "./Input.module.scss";
/* types */
import { InputProps, TextAreaProps } from "antd/lib/input";

function isPropsForTextareaElement(
    props: InputProps | TextAreaProps
): props is TextAreaProps {
    return "rows" in props;
}

// export const Input = React.forwardRef<any, InputProps | TextAreaProps>(
//     ({ className, ...restProps }, ref) => {
//         if (isPropsForTextareaElement(restProps)) {
//             return (
//                 <AntDesignInput.TextArea
//                     className={clsx(s.textarea, className)}
//                     ref={ref}
//                     {...restProps}
//                 />
//             );
//         } else {
//             return (
//                 <AntDesignInput
//                     className={clsx(s.input, className)}
//                     ref={ref}
//                     {...restProps}
//                 />
//             );
//         }
//     }
// );

export const Input: FC<InputProps> = props => {
    return (
        <AntDesignInput className={clsx(s.input, props.className)} {...props} />
    );
};

export const Textarea = forwardRef<any, TextAreaProps>((props, ref) => {
    return (
        <AntDesignInput.TextArea
            className={clsx(s.textarea, props.className)}
            ref={ref}
            {...props}
        />
    );
});
