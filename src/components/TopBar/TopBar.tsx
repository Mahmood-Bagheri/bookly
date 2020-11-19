import React, { FunctionComponent, useState } from "react";
/* components */
import { MenuBar } from "components/MenuBar";
import { MenuItem } from "components/MenuBarItem";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";
/* types */
import { TopBarComponentProps } from "./TopBar.types";
/* styles */
import s from "./TopBar.module.scss";
import __ROUTES__ from "constants/routes";
import { Container } from "components/Container";
import { Row } from "components/Row";
import { Col } from "components/Col";
import { Drawer } from "components/Drawer";
import { AclService } from "services/rbac";

export const TopBar: FunctionComponent<TopBarComponentProps> = props => {
    const { className, title, ...restProps } = props;

    const [drawerState, setDrawerState] = useState(false);
    const openDrawer = () => {
        setDrawerState(true);
    };

    const closeDrawer = () => {
        setDrawerState(false);
    };
    const menu: MenuItem[] = [
        { title: "خانه", link: __ROUTES__.dashboardIntro },
        { title: "ثبت نام", link: __ROUTES__.login },
        { title: "ورود", link: __ROUTES__.user },
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
            <Drawer
                onClose={closeDrawer}
                visible={drawerState}
                closable={false}
            >
                hey!
            </Drawer>
        </Container>
    );
};
