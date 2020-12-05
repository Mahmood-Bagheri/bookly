import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BookCategoriesGrid } from "components/BookCategoriesGrid";
import { useQuery } from "react-query";

export const apiCall = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

const Categories: FC = props => {
    const { isLoading } = useQuery("categories", apiCall);

    return (
        <Fragment>
            <DocumentTitle title="دسته بندی ها" />
            <BookCategoriesGrid loading={isLoading} />
        </Fragment>
    );
};

export default Categories;
