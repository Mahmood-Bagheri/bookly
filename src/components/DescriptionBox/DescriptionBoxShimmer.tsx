import React from "react";
import clsx from "classnames";
import s from "./DescriptionBoxShimmer.module.scss";

export const DescriptionBoxShimmer = () => {
    return (
        <div className={clsx(s.box, `shadow mb-3`)}>
            <div className={s.title}></div>
            <p className={s.body} />
        </div>
    );
};
