import React, { FunctionComponent } from "react";
/* components */
import { Drawer as AntDesignDrawer } from "antd";
/* modules */
/* helpers */
/* assets */
/* types */
import { DrawerComponentProps } from "./Drawer.types";
/* styles */

export const Drawer: FunctionComponent<DrawerComponentProps> = props => {
    return <AntDesignDrawer {...props} />;
};
