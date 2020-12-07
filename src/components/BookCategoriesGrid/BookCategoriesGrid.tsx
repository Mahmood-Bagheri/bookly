import React, { FunctionComponent } from "react";
/* components */
import { BookCategoryBox, Category } from "components/BookCategoryBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
/* helpers */
/* assets */
/* types */
import { BookCategoriesGridComponentProps } from "./BookCategoriesGrid.types";
/* styles */
import s from "./BookCategoriesGrid.module.scss";

export const BookCategoriesGrid: FunctionComponent<BookCategoriesGridComponentProps> = ({
    categories,
    loading = false,
}) => {
    if (loading) {
        return <BookCategoryBox.ShimmerGrid />;
    }

    return (
        <GenericGrid<Category>
            withRow
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
