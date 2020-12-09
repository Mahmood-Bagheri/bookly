import React, { FC } from "react";
/* components */
import { BookCategoryBox } from "components/BookCategoryBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import { useQueryString } from "hooks/useQueryString";
/* helpers */
import { checkInclusion } from "helpers/checkInclusion";
/* assets */
/* types */
import { BookCategoriesGridProps } from "./BookCategoriesGrid.types";
/* styles */

export const BookCategoriesGrid: FC<BookCategoriesGridProps> = ({
    categories,
    loading = false,
}) => {
    const query = useQueryString("query");
    const filterPublishers = (category: Category.Base) =>
        checkInclusion(category.categoryTitle, query);

    if (loading) {
        return <BookCategoryBox.ShimmerGrid />;
    }

    return (
        <GenericGrid<Category.Base>
            withRow
            filter={filterPublishers}
            items={categories}
            renderItem={renderCategories}
        />
    );
};

const renderCategories = (category: Category.Base) => {
    return (
        <BookCategoryBox.Component
            key={category.id}
            id={category.id}
            categoryTitle={category.categoryTitle}
        />
    );
};
