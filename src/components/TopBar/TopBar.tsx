import React, { FunctionComponent, useState, Fragment } from "react";
/* components */
import { MenuBar } from "components/MenuBar";
import { Row } from "components/Row";
import { Col } from "components/Col";
/* modules */
import clsx from "classnames";
import { useRecoilState } from "recoil";
import { roleState } from "services/recoil/user/atoms";
import { AclService } from "services/rbac";
/* helpers */
/* assets */
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
/* constants */
import { MENU } from "constants/topbar";
/* types */
import { TopBarComponentProps } from "./TopBar.types";
/* styles */
import s from "./TopBar.module.scss";
import { MainDrawer } from "components/MainDrawer";
import { FeedFilterBox } from "components/FeedFilterBox";

export const TopBar: FunctionComponent<TopBarComponentProps> = props => {
    const { className, title, onSearch, ...restProps } = props;

    return (
        <Fragment>
            <Row className="align-items-center">
                <Col col={6}>
                    <FeedFilterBox.Component onSearch={onSearch} />
                </Col>
                <Col col={6}>
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
