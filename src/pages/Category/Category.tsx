import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BooksGrid } from "components/BooksGrid";
/* mocks */
import { mock } from "helpers/mock";
/* modules */
import { useParams } from "react-router-dom";
import { useCategoryBooks } from "hooks";

const Category: FC = props => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const { isLoading, data } = useCategoryBooks(categoryId);

    return (
        <Fragment>
            <DocumentTitle title="Category" />
            <BooksGrid
                books={mock<Book.Base>("books", 12)}
                loading={isLoading}
            />
        </Fragment>
    );
};

export default Category;
