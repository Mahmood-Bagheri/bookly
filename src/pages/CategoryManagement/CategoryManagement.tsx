import React, { FC, Fragment } from "react";
/* components */
import { DocumentTitle } from "components/DocumentTitle";
import { CategoryManagementTable } from "components/CategoryManagementTable";
import { useCategories } from "hooks";

const CategoryManagement: FC = () => {
    const { data: categories, isLoading: loading } = useCategories();

    return (
        <Fragment>
            <DocumentTitle title="مدیریت دسته بندی ها" />
            <CategoryManagementTable
                loading={loading}
                categories={categories!}
            />
        </Fragment>
    );
};

export default CategoryManagement;
