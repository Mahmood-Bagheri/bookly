import React from "react";
import s from "./BookBox.Shimmer.module.scss";

export const BookBoxShimmer = () => {
    return (
        <div className={`${s.box} shadow`}>
            <div className={s.content}>
                <div className={s.title} />
                <div className={s.authorWrap} />
            </div>
            <div className="p-1">
                <div className={s.image} />
            </div>
            <div className={s.actions}>
                <div />
                <div />
            </div>
        </div>
    );
};
