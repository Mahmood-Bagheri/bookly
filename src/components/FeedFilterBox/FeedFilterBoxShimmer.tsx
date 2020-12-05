import React from "react";
import clsx from "classnames";
import { Row } from "components/Row";
import { Col } from "components/Col";
import s from "./FeedFilterBoxShimmer.module.scss";
import { Input } from "components/Input";

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
