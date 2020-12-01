import React, { FC, Fragment } from "react";
import { GenericGrid } from "components/GenericGrid";
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { Publisher, PublisherBox } from "components/PublisherBox";
import { uniqueId } from "helpers/uniqueId";
import { Col } from "components/Col";
/* components */

const Publishers: FC = props => {
    const publishers = fakeArrayGenerator(10);
    return (
        <Fragment>
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
        <Col xl={3} lg={4} md={6}>
            <PublisherBox
                key={uniqueId()}
                id={uniqueId()}
                title="ققنوس"
                imageSrc={`https://source.unsplash.com/500x500/?book&sig=1`}
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
