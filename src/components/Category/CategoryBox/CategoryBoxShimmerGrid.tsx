import React from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { Col } from "components/Col";
import { CategoryBoxShimmer } from "./CategoryBoxShimmer";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { SHIMMERS_CONFIG } from "constants/config";
import { uniqueId } from "helpers/uniqueId";

type Props = {
    count?: number;
};

export const CategoryBoxShimmerGrid = ({
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
        <Col xl={4} sm={6} className="mb-3" key={uniqueId()}>
            <CategoryBoxShimmer />
        </Col>
    );
};
