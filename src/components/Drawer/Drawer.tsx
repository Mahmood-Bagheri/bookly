import React, { FC } from 'react';
/* components */
import { Drawer as AntDesignDrawer } from 'antd';
/* modules */
/* helpers */
/* assets */
/* types */
import { DrawerProps } from './Drawer.types';
/* styles */

export const Drawer: FC<DrawerProps> = props => {
    return <AntDesignDrawer {...props} />;
};
