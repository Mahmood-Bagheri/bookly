import React, { FunctionComponent } from "react";
/* components */
import { PublisherBox } from "components/Publisher";
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
import { Publisher } from "types/publisher";
import { PublisherBoxComponentProps } from "../PublisherBox";

export const PublishersGrid: FunctionComponent<PublishersGridComponentProps> = ({
    loading,
    publishers,
}) => {
    const [{ query }] = useQueryString();

    const filterPublishers = (publisher: Publisher.Query.Result) =>
        checkInclusion(publisher.title, query as string);

    if (loading) {
        return <PublisherBox.ShimmerGrid />;
    }
    return (
        <GenericGrid<Publisher.Query.Result>
            withRow
            items={publishers}
            filter={filterPublishers}
            renderItem={renderPublisher}
        />
    );
};

const renderPublisher = (publisher: PublisherBoxComponentProps) => (
    <Col xl={4} lg={4} md={6} className="mb-3">
        <PublisherBox.Component
            _id={publisher._id}
            title={publisher.title}
            createdAt={publisher.createdAt}
            updatedAt={publisher.updatedAt}
            description={publisher.description}
            followers={publisher.followers}
            image={publisher.image}
            initialFollowingState={false}
            onFollow={publisherId => console.log(publisherId)}
            books={publisher.books}
        />
    </Col>
);
