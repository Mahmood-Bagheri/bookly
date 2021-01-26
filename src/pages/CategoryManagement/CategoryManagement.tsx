import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { CategoryManagementTable } from 'components/CategoryManagementTable';
import { CreateCategoryForm } from 'components/CreateCategoryForm';
/* modules */
import {
    CreateCategoryMutationVariables,
    useCategories,
    useCreateCategory,
} from 'hooks';
import { FormInstance } from 'antd/lib/form';

const CategoryManagement: FC = () => {
    const { data: categories, isLoading: loading } = useCategories();
    const [
        createCategory,
        { isLoading: createCategoryIsLoading },
    ] = useCreateCategory();

    const handleCreate = (
        data: CreateCategoryMutationVariables,
        form: FormInstance
    ) => {
        createCategory(data, {
            onSuccess: () => {
                form.resetFields();
            },
        });
    };

    return (
        <Fragment>
            <DocumentTitle title='مدیریت دسته بندی ها' />
            <CreateCategoryForm
                loading={createCategoryIsLoading}
                onSubmit={handleCreate}
            />
            <CategoryManagementTable
                loading={loading}
                categories={categories!}
            />
        </Fragment>
    );
};

export default CategoryManagement;
