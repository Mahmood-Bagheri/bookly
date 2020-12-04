import React, { FunctionComponent } from "react";
import clsx from "classnames";
import s from "./PublisherDescriptionTextShimmer.module.scss";

export const PublisherDescriptionTextShimmer = () => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <div className={s.title}></div>
            <p className={s.body} />
        </div>
    );
};
