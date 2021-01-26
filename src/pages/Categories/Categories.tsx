import React, { FC, Fragment } from 'react';
/* components */
import { DocumentTitle } from 'components/DocumentTitle';
import { CategoriesGrid } from 'components/Category';
import { useCategories } from 'hooks';

const Categories: FC = () => {
    const { data: categories, isLoading, isFetched } = useCategories();

    return (
        <Fragment>
            <DocumentTitle title='دسته بندی ها' />
            <CategoriesGrid categories={categories!} loading={isLoading} />
        </Fragment>
    );
};

export default Categories;
