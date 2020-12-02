import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BookCategoriesGrid } from "components/BookCategoriesGrid";
import { TopBar } from "components/TopBar";

const Categories: FC = props => {
    return (
        <Fragment>
            <DocumentTitle title="Categories" />
            <BookCategoriesGrid />
        </Fragment>
    );
};

export default Categories;
