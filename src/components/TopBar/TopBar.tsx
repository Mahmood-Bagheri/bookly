import React, { FunctionComponent, Fragment } from "react";
/* components */
import { MenuBar } from "components/MenuBar";
import { Row } from "components/Row";
import { Col } from "components/Col";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* constants */
import { MENU } from "constants/topbar";
/* types */
import { TopBarComponentProps } from "./TopBar.types";
import { FeedFilterBox } from "components/FeedFilterBox";
/* styles */
import s from "./TopBar.module.scss";

export const TopBar: FunctionComponent<TopBarComponentProps> = props => {
    const { className, title, onSearch, withSearchbar, ...restProps } = props;

    return (
        <Fragment>
            <Row className="align-items-center">
                {withSearchbar && (
                    <Col lg={6} className="order-2 order-lg-0">
                        <FeedFilterBox.Component onSearch={onSearch} />
                    </Col>
                )}
                <Col lg={withSearchbar ? 6 : 12}>
                    <div className={clsx(s.topbar, className)} {...restProps}>
                        <div className="d-flex align-items-center justify-content-center">
                            <h1 className={s.title}>{title}</h1>
                        </div>
                        <MenuBar menu={MENU} />
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};
