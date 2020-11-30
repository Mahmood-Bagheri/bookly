import React, { FunctionComponent } from "react";
/* compoents */
import { Spin } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { SpinnerComponentProps } from "./Spinner.types";
/* styles */
import s from "./Spinner.module.scss";

export const Spinner: FunctionComponent<SpinnerComponentProps> = ({
    height = 20,
    width = 20,
}) => {
    return (
        <div
            className={s["sk-chase"]}
            style={{ height: `${height}px`, width: `${width}px` }}
        >
            <div className={s["sk-chase-dot"]}></div>
            <div className={s["sk-chase-dot"]}></div>
            <div className={s["sk-chase-dot"]}></div>
            <div className={s["sk-chase-dot"]}></div>
            <div className={s["sk-chase-dot"]}></div>
            <div className={s["sk-chase-dot"]}></div>
        </div>
    );
};
