import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { DocumentTitleProps } from "./DocumentTitle.types";

export const DocumentTitle: FC<DocumentTitleProps> = ({
    title,
    ...restProps
}) => {
    const appTitle = process.env.REACT_APP_WEBSITE_TITLE || "Bookly 📚";
    const dcTitle = `${title} | ${appTitle}`;
    return <Helmet title={dcTitle} {...restProps} />;
};
