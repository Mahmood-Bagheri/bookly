import React from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { BookBoxShimmer } from "./BookBox.Shimmer";
import { Col } from "components/Col";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { SHIMMERS_CONFIG } from "constants/config";
import { uniqueId } from "helpers/uniqueId";

const renderShimmer = () => {
    return (
        <Col xl={3} sm={6} className="mb-3" key={uniqueId()}>
            <BookBoxShimmer />
        </Col>
    );
};

type Props = {
    count?: number;
};

export const BookBoxShimmerGrid = ({
    count = SHIMMERS_CONFIG.bookBoxCount,
}: Props) => {
    return (
        <GenericGrid<ArrayConstructor>
            withRow
            items={fakeArrayGenerator(count)}
            renderItem={renderShimmer}
        />
    );
};
