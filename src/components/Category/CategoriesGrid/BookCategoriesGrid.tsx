import React, { FC } from 'react';
/* components */
import { CategoryBox } from 'components/Category';
import { GenericGrid } from 'components/GenericGrid';
import { Col } from 'components/Col';
/* modules */
import { useQueryString } from 'hooks/useQueryString';
/* helpers */
import { checkInclusion } from 'helpers/checkInclusion';
import { uniqueId } from 'lodash';
/* assets */
/* types */
import { CategoriesGridProps } from './CategoriesGrid.types.d';
/* styles */

export const CategoriesGrid: FC<CategoriesGridProps> = ({
    categories,
    loading = false,
}) => {
    const [{ query }] = useQueryString();

    const filterPublishers = (category: Category.Query.Result) =>
        checkInclusion(category.title, query as string);

    if (loading) {
        return <CategoryBox.ShimmerGrid />;
    }

    return (
        <GenericGrid<Category.Query.Result>
            withRow
            filter={filterPublishers}
            items={categories}
            renderItem={renderCategories}
        />
    );
};

const renderCategories = (category: Category.Query.Result) => {
    return (
        <Col xl={4} sm={6} className='mb-3' key={category._id}>
            <CategoryBox.Component
                _id={category._id}
                title={category.title}
                books={category.books}
            />
        </Col>
    );
};
