import React from "react";
import clsx from "classnames";
import s from "./PublisherBoxShimmer.module.scss";

export const PublisherBoxShimmer = () => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className="p-1">
                <div className={s.image} />
            </div>
            <div className={s.content}>
                <div className={s.title} />
                <div className={s.description} />
                <div
                    className={s.follow}
                    data-purpose="button-placeholder"
                ></div>
            </div>
        </div>
    );
};
