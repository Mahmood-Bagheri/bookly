import React, { FC, Fragment, useState } from "react";
/* components */
import { TopBar } from "components/TopBar";
/* modules */
import { QS_KEYS } from "constants/qs";
/* helpers */
import { updateQs } from "helpers/updateQs";
/* assets */
/* types */
import { LayoutProps } from "./Layout.types";
/* styles */

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <TopBar onSearch={text => updateQs(QS_KEYS.feed, text)} />
            {children}
        </Fragment>
    );
};
