import React, { FunctionComponent } from "react";
/* components */
import { Publisher, PublisherBox } from "components/PublisherBox";
import { GenericGrid } from "components/GenericGrid";
/* modules */
import { useQueryString } from "hooks/useQueryString";
/* helpers */
import { checkInclusion } from "helpers/checkInclusion";
/* types */
import { PublishersGridComponentProps } from "./PublishersGrid.types";
/* styles */
import s from "./PublishersGrid.module.scss";
import { Col } from "components/Col";

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = ({
    loading,
    publishers,
}) => {
    const queryString = useQueryString("query");

    if (loading) {
        return <PublisherBox.ShimmerGrid />;
    }
    return (
        <GenericGrid<Publisher>
            withRow
            items={publishers}
            filter={publisher => checkInclusion(publisher.title, queryString)}
            renderItem={renderPublisher}
        />
    );
};

const renderPublisher = (publisher: Publisher) => (
    <Col xl={3} lg={4} md={6} className="mb-3">
        <PublisherBox.Component
            key={publisher.id}
            id={publisher.id}
            title={publisher.title}
            description={publisher.description}
            imageSrc={publisher.imageSrc}
            initialFollowingState={false}
            onFollow={publisherId => console.log(publisherId)}
        />
    </Col>
);
