import React, { FC } from "react";
/* components */
import { Helmet } from "react-helmet";
/* constants */
import { APP_TITLE } from "constants/config";
/* types */
import { DocumentTitleProps } from "./DocumentTitle.types";

export const DocumentTitle: FC<DocumentTitleProps> = ({
    title: pageTitle,
    ...restProps
}) => {
    const docTitle = `${pageTitle} | ${APP_TITLE}`;
    return <Helmet title={docTitle} {...restProps} />;
};
