import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { BookCategoriesGrid } from "components/BookCategoriesGrid";
import { useCategories } from "hooks";
import { mock } from "helpers/mock";

const Categories: FC = props => {
    const { isLoading } = useCategories();

    return (
        <Fragment>
            <DocumentTitle title="دسته بندی ها" />
            <BookCategoriesGrid
                categories={mock("categories")}
                loading={isLoading}
            />
        </Fragment>
    );
};

export default Categories;
