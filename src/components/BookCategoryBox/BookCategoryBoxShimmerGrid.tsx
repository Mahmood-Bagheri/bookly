import React from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
import { BookCategoryBoxShimmer } from "./BookCategoryBoxShimmer";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { SHIMMERS_CONFIG } from "constants/config";

type Props = {
    count?: number;
};

export const BookCategoryBoxShimmerGrid = ({
    count = SHIMMERS_CONFIG.categoriesCount,
}: Props) => {
    return (
        <GenericGrid<ArrayConstructor>
            withRow
            items={fakeArrayGenerator(count)}
            renderItem={renderShimmer}
        />
    );
};

const renderShimmer = () => {
    return (
        <Col xl={3} sm={6} className="mb-3">
            <BookCategoryBoxShimmer />
        </Col>
    );
};
