import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { CategoriesGrid } from "components/Category";
import { useCategories } from "hooks";
import { mock } from "helpers/mock";

const Categories: FC = () => {
    const { isLoading, isFetched } = useCategories({
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    return (
        <Fragment>
            <DocumentTitle title="دسته بندی ها" />
            <CategoriesGrid
                categories={mock("categories", 12)}
                loading={!isFetched}
            />
        </Fragment>
    );
};

export default Categories;
