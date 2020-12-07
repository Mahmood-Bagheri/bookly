import React, { FunctionComponent } from "react";
/* components */
import { BookCategoryBox, Category } from "components/BookCategoryBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import { useQueryString } from "hooks/useQueryString";
/* helpers */
import { checkInclusion } from "helpers/checkInclusion";
/* assets */
/* types */
import { BookCategoriesGridComponentProps } from "./BookCategoriesGrid.types";
/* styles */

export const BookCategoriesGrid: FunctionComponent<BookCategoriesGridComponentProps> = ({
    categories,
    loading = false,
}) => {
    const query = useQueryString("query");
    const filterPublishers = (category: Category) =>
        checkInclusion(category.categoryTitle, query);

    if (loading) {
        return <BookCategoryBox.ShimmerGrid />;
    }

    return (
        <GenericGrid<Category>
            withRow
            filter={filterPublishers}
            items={categories}
            renderItem={renderCategories}
        />
    );
};

const renderCategories = (category: Category) => {
    return (
        <BookCategoryBox.Component
            key={category.id}
            id={category.id}
            categoryTitle={category.categoryTitle}
        />
    );
};
