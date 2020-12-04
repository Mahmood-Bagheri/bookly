import React from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
import { BookCategoryBoxShimmer } from "./BookCategoryBoxShimmer";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { SHIMMERS_CONFIG } from "constants/config";

const renderShimmer = () => {
    return (
        <Col xl={3} sm={6} className="mb-3">
            <BookCategoryBoxShimmer />
        </Col>
    );
};

export const BookCategoryBoxShimmerGrid = () => {
    return (
        <GenericGrid<ArrayConstructor>
            withRow
            items={fakeArrayGenerator(SHIMMERS_CONFIG.categoriesCount)}
            renderItem={renderShimmer}
        />
    );
};
