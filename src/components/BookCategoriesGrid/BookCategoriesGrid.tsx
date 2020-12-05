import React, { FunctionComponent } from "react";
/* components */
import { BookCategoryBox } from "components/BookCategoryBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import clsx from "classnames";
/* helpers */
import { mock } from "helpers/mock";
/* assets */
/* types */
import { BookCategoriesGridComponentProps } from "./BookCategoriesGrid.types";
/* styles */
import s from "./BookCategoriesGrid.module.scss";

export const BookCategoriesGrid: FunctionComponent<BookCategoriesGridComponentProps> = props => {
    const { className, loading = false, ...restProps } = props;

    if (loading) {
        return <BookCategoryBox.ShimmerGrid />;
    }

    return (
        <GenericGrid<Category.Base>
            withRow
            items={mock("categories", 12)}
            renderItem={renderCategories}
        />
    );
};

const renderCategories = (category: Category.Base, index: number) => {
    return (
        <BookCategoryBox.Component
            key={category.id}
            id={category.id}
            categoryTitle={category.title}
        />
    );
};
