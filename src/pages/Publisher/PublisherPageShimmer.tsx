import React, { Fragment } from "react";
import { BookBox } from "components/BookBox";
import { Col } from "components/Col";
import { PublisherBox } from "components/PublisherBox";
import { PublisherDescriptionText } from "components/PublisherDescriptionText";
import { Row } from "components/Row";

export const PublisherPageShimmer = () => {
    return (
        <Fragment>
            <Row className="mb-3">
                <Col md={6} lg={3} className="mb-3 ">
                    <PublisherBox.Shimmer />
                </Col>
                <Col lg={9}>
                    <PublisherDescriptionText.Shimmer />
                </Col>
            </Row>
            <BookBox.ShimmerGrid count={3} />
        </Fragment>
    );
};
