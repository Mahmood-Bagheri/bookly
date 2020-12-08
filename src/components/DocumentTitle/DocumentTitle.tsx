import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { DocumentTitleProps } from "./DocumentTitle.types";

export const DocumentTitle: FC<DocumentTitleProps> = ({
    title,
    ...restProps
}) => {
    const dcTitle = `${title} | Bookly 📚`;
    return <Helmet title={dcTitle} {...restProps} />;
};
