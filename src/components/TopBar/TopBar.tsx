import React, { FunctionComponent, useState } from "react";
/* components */
import { MenuBar } from "components/MenuBar";
import { MenuItem } from "components/MenuBarItem";
import { Container } from "components/Container";
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
/* types */
import { TopBarComponentProps } from "./TopBar.types";
/* styles */
import s from "./TopBar.module.scss";
import { MainDrawer } from "components/MainDrawer";
import { routeTo } from "helpers/routeTo";

export const TopBar: FunctionComponent<TopBarComponentProps> = props => {
    const { className, title, ...restProps } = props;

    const [drawerState, setDrawerState] = useState(false);
    const [role] = useRecoilState(roleState);

    const openDrawer = () => {
        setDrawerState(true);
    };

    const closeDrawer = () => {
        setDrawerState(false);
    };

    const menu: MenuItem[] = [
        { title: "دسته بندی ها", link: routeTo("home") },
        { title: "کتاب ها", link: routeTo("home") },
    ];

    return (
        <Container>
            <Row>
                <Col col={12}>
                    <div className={clsx(s.topbar, className)} {...restProps}>
                        <div className="d-flex align-items-center justify-content-center">
                            <AclService permission="drawer.see">
                                <MenuIcon
                                    onClick={openDrawer}
                                    height="30"
                                    width="30"
                                    className="ml-5"
                                />
                            </AclService>
                            <h1 className={s.title}>{title}</h1>
                        </div>
                        <MenuBar menu={menu} />
                    </div>
                </Col>
            </Row>
            <MainDrawer
                onClose={closeDrawer}
                visible={drawerState}
                closable={false}
            />
        </Container>
    );
};
