import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* mocks */
import { books } from "mock/books";
/* modules */
import { useParams } from "react-router-dom";

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();

    return (
        <Fragment>
            <DocumentTitle title="Category" />
            <BooksGrid books={books} loading={false} />
        </Fragment>
    );
};

export default Category;
