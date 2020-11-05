import React, { FunctionComponent } from "react";
import { InputComponentProps } from "./Input.types";
import classnames from "classnames";
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
