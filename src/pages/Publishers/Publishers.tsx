import React, { FC, Fragment } from "react";
/* components */
import { GenericGrid } from "components/GenericGrid";
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { Publisher, PublisherBox } from "components/PublisherBox";
import { uniqueId } from "helpers/uniqueId";
import { Col } from "components/Col";
import { usePublishers } from "hooks";
import { LoadingIndicator } from "components/LoadingIndicator";
import { DocumentTitle } from "components/DocumentTitle";

const Publishers: FC = props => {
    const publishers = fakeArrayGenerator(10);
    const {
        data: tempPublishers,
        isLoading: publishersIsLoading,
    } = usePublishers();

    if (publishersIsLoading) {
        return <PublisherBox.ShimmerGrid />;
    }

    return (
        <Fragment>
            <DocumentTitle title="Publishers" />
            <GenericGrid<Publisher>
                withRow
                items={publishers as any}
                renderItem={renderPublisher}
            />
        </Fragment>
    );
};

const renderPublisher = (publisher: Publisher, index: number) => {
    return (
        <Col xl={3} lg={4} md={6} className="mb-3">
            <PublisherBox.Component
                key={uniqueId()}
                id={uniqueId()}
                title="ققنوس"
                imageSrc={`https://source.unsplash.com/500x500/?book&sig=${uniqueId()}`}
                description="توضیحات پابیشر"
                onFollow={publisherId =>
                    console.log(
                        "following the publisher with id of ",
                        publisherId
                    )
                }
            />
        </Col>
    );
};

export default Publishers;
