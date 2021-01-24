import React, { FC, Fragment } from "react";
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
import { MainDrawer } from "components/MainDrawer";
import { AclService } from "services/rbac";

export const TopBar: FC<TopBarComponentProps> = React.memo(props => {
    const { className, title, onSearch, withSearchbar, ...restProps } = props;

    return (
        <Fragment>
            <Row className="pt-4 pb-3">
                <AclService permission="drawer">
                    <Col lg={1}>
                        <MainDrawer />
                    </Col>
                </AclService>

                {withSearchbar && (
                    <Col lg={6} className="order-2 order-lg-0">
                        <FeedFilterBox.Component onSearch={onSearch} />
                    </Col>
                )}
                <Col className="mr-auto" lg={withSearchbar ? 5 : 12}>
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
});
