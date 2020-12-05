import React, { FC, Fragment, useState } from "react";
/* components */
import { TopBar } from "components/TopBar";
/* modules */

/* helpers */
import { updateQs } from "helpers/updateQs";
/* assets */
/* types */
import { LayoutProps } from "./Layout.types";
/* styles */

export const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <Fragment>
            <TopBar onSearch={updateQs} />
            {children}
        </Fragment>
    );
};
