import React, { FunctionComponent } from "react";
/* components */
import { Container } from "components/Container";
import { BookCategoryBox } from "components/BookCategoryBox";
import { Row } from "components/Row";
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
    return <Row>{fakeArrayGenerator(10).map(renderCategories)}</Row>;
};

const renderCategories = (category: any, index: number) => {
    return (
        <BookCategoryBox
            id={index.toString()}
            categoryTitle="عنوان دسته بندی"
        />
    );
};
