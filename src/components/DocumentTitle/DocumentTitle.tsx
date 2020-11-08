import React, { FunctionComponent } from "react";
import { Helmet } from "react-helmet";
import { DocumentTitleComponentProps } from "./DocumentTitle.types";

export const DocumentTitle: FunctionComponent<DocumentTitleComponentProps> = ({
    title,
    ...restProps
}) => {
    const dcTitle = `Bookly 📚 | ${title}`;
    return <Helmet title={dcTitle} {...restProps} />;
};
