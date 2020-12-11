import React from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { PublisherBoxShimmer } from "./PublisherBoxShimmer";
import { Col } from "components/Col";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { uniqueId } from "helpers/uniqueId";
/* constants */
import { SHIMMERS_CONFIG } from "constants/config";

const renderShimmer = () => {
    return (
        <Col xl={4} sm={6} className="mb-3" key={uniqueId()}>
            <PublisherBoxShimmer />
        </Col>
    );
};

export const PublisherBoxShimmerGrid = () => {
    return (
        <GenericGrid<ArrayConstructor>
            withRow
            items={fakeArrayGenerator(SHIMMERS_CONFIG.publisherBoxCount)}
            renderItem={renderShimmer}
        />
    );
};
