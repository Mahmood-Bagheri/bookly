import React, { FunctionComponent } from "react";
/* components */
import { BookCategoryBox } from "components/BookCategoryBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import clsx from "classnames";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
/* assets */
/* types */
import { BookCategoriesGridComponentProps } from "./BookCategoriesGrid.types";
/* styles */
import s from "./BookCategoriesGrid.module.scss";

export const BookCategoriesGrid: FunctionComponent<BookCategoriesGridComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <GenericGrid
            withRow
            items={fakeArrayGenerator(10)}
            renderItem={renderCategories}
        />
    );
};

const renderCategories = (category: any, index: number) => {
    return (
        <BookCategoryBox
            id={index.toString()}
            categoryTitle="عنوان دسته بندی"
        />
    );
};
