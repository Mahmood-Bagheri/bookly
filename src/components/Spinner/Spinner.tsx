import React, { FC } from "react";
/* compoents */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { SpinnerProps } from "./Spinner.types";
/* styles */
import s from "./Spinner.module.scss";

export const Spinner: FC<SpinnerProps> = ({ height = 24, width = 24 }) => {
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
