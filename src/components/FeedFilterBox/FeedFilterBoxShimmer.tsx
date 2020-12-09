import React from "react";
/* components */
import { Row } from "components/Row";
import { Col } from "components/Col";
/* styles */
import s from "./FeedFilterBoxShimmer.module.scss";

export const FeedFilterBoxShimmer = () => {
    return (
        <Row className="mb-3 align-items-center">
            <Col col={6}></Col>
            <Col col={6}>
                <div className={s.input}></div>
            </Col>
        </Row>
    );
};
