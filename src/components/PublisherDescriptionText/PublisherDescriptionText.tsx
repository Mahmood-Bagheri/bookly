import React, { FunctionComponent } from "react";
/* components */
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { PublisherDescriptionTextComponentProps } from "./PublisherDescriptionText.types";
/* styles */
import s from "./PublisherDescriptionText.module.scss";
import { Route, useParams } from "react-router-dom";

export const PublisherDescriptionText: FunctionComponent<PublisherDescriptionTextComponentProps> = ({
    title,
    description,
}) => {
    return (
        <div className={clsx(s.box, `shadow`)}>
            <p className={s.title}>{title}</p>
            <p className={s.body}>{description}</p>
        </div>
    );
};
