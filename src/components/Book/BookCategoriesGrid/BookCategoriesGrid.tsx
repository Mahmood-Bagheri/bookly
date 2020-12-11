import React, { FC } from "react";
/* components */
import { BookCategoryBox } from "components/Book";
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
/* modules */
import { useQueryString } from "hooks/useQueryString";
/* helpers */
import { checkInclusion } from "helpers/checkInclusion";
import { uniqueId } from "lodash";
/* assets */
/* types */
import { BookCategoriesGridProps } from "./BookCategoriesGrid.types";
/* styles */

export const BookCategoriesGrid: FC<BookCategoriesGridProps> = ({
    categories,
    loading = false,
}) => {
    const [{ query }] = useQueryString();

    const filterPublishers = (category: Category.Base) =>
        checkInclusion(category.categoryTitle, query as string);

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
        <Col xl={4} sm={6} className="mb-3" key={uniqueId()}>
            <BookCategoryBox.Component
                id={category.id}
                categoryTitle={category.categoryTitle}
            />
        </Col>
    );
};
