import React from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { BookBoxShimmer } from "./BookBox.Shimmer";
import { Col } from "components/Col";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";

const renderShimmer = () => {
    return (
        <Col xl={3} sm={6} className="mb-3">
            <BookBoxShimmer />
        </Col>
    );
};

export const BookBoxShimmerGrid = () => {
    return (
        <GenericGrid<ArrayConstructor>
            withRow
            items={fakeArrayGenerator(3)}
            renderItem={renderShimmer}
        />
    );
};
