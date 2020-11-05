import React, { FunctionComponent } from "react";
/* types */
import { InputComponentProps } from "./Input.types";
/* modules */
import classnames from "classnames";
/* styles */
import s from "./Input.module.scss";

export const Input: FunctionComponent<InputComponentProps> = props => {
    const { className = "", ...restProps } = props;
    const clsx = classnames(s.input, className);

    if ("rows" in props) {
        return <textarea {...props} className={clsx} />;
    }

    return (
        <input
            type="text"
            className={clsx}
            {...(props as React.DetailedHTMLProps<
                React.InputHTMLAttributes<HTMLInputElement>,
                HTMLInputElement
            >)}
        />
    );
};
