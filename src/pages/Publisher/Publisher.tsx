import React, { FC, Fragment } from "react";
/* components */
import { Row } from "components/Row";
import { Col } from "components/Col";
import { PublisherBox } from "components/Publisher";
import { BooksGrid } from "components/Book";
import { DescriptionBox } from "components/DescriptionBox";
import { useSinglePublisher } from "hooks";
import { useParams } from "react-router-dom";
import { PublisherPageShimmer } from "./PublisherPageShimmer";

const Publisher: FC = props => {
    const { publisherId } = useParams<{ publisherId: string }>();
    const { data: publisher, isLoading: loading } = useSinglePublisher(
        publisherId
    );

    if (loading || !publisher) {
        return <PublisherPageShimmer />;
    }

    return (
        <Fragment>
            <Row className="mb-3">
                <Col md={6} lg={3} className="mb-3 ">
                    <PublisherBox.Component
                        _id={publisher?._id}
                        followers={publisher?.followers}
                        description={publisher?.description}
                        image={publisher?.image}
                        title={publisher?.title}
                        createdAt={publisher?.createdAt}
                        updatedAt={publisher?.updatedAt}
                        books={publisher.books}
                    />
                </Col>
                <Col lg={9}>
                    <DescriptionBox
                        loading={loading}
                        className="mb-3"
                        title="مشخصات ناشر"
                        description={publisher?.description}
                    />
                    <BooksGrid loading={loading} books={publisher.books} />
                </Col>
            </Row>
        </Fragment>
    );
};

export default Publisher;
