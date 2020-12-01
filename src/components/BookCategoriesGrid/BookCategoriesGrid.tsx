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
import { uniqueId } from "helpers/uniqueId";

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
    /* todo -> pick a uniq id for each category  */
    return (
        <BookCategoryBox
            key={index.toString()}
            id={uniqueId()}
            categoryTitle="عنوان دسته بندی"
        />
    );
};
