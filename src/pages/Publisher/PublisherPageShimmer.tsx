import React, { Fragment } from "react";
import { BookBox } from "components/Book/BookBox";
import { Col } from "components/Col";
import { PublisherBox } from "components/Publisher/PublisherBox";
import { DescriptionBox } from "components/DescriptionBox";
import { Row } from "components/Row";

export const PublisherPageShimmer = () => {
    return (
        <Fragment>
            <Row className="mb-3">
                <Col md={6} lg={3} className="mb-3 ">
                    <PublisherBox.Shimmer />
                </Col>
                <Col lg={9}>
                    <DescriptionBox loading />
                    <BookBox.ShimmerGrid count={4} />
                </Col>
            </Row>
        </Fragment>
    );
};
