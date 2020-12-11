import React from "react";
/* components */
import { Col } from "components/Col";
/* modules */
import clsx from "classnames";
/* helpers */
/* types */
/* styles */
import s from "./BookCategoryBoxShimmer.module.scss";

export const BookCategoryBoxShimmer = () => {
    return <div className={clsx(s.box, `shadow`)} />;
};
