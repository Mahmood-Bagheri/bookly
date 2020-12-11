import React from "react";
/* modules */
import clsx from "classnames";
import s from "./CategoryDetailsBoxShimmer.module.scss";

export const CategoryDetailsBoxShimmer = () => {
    return (
        <div className={clsx(s.box, `shadow p-4 mb-4`)}>
            <div className="d-flex flex-column align-items-center">
                <div className={s.categoryImage} />
                <div className={s.name}></div>
            </div>
            <div className={clsx(s.description)}></div>
        </div>
    );
};
