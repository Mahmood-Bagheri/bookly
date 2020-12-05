import React, { FC } from "react";
/* components */
import { Row } from "components/Row";
import { Col } from "components/Col";
import { Input } from "components/Input";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { FeedFilterBoxProps } from "./FeedFilterBox.types";
/* styles */
import s from "./FeedFilterBox.module.scss";

export const FeedFilterBox: FC<FeedFilterBoxProps> = ({
    className,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, "mb-3", className)}>
            <Row>
                <Col col={6}></Col>
                <Col col={6}>
                    <Input placeholder="جست و جو" />
                </Col>
            </Row>
        </div>
    );
};
