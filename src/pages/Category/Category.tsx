import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
/* modules */
import { useParams } from "react-router-dom";

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();
    return (
        <Fragment>
            <DocumentTitle title="Category" />
            books of category with id of {categoryId} goes here
        </Fragment>
    );
};

export default Category;
