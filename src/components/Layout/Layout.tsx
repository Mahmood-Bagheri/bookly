import React, { FC, Fragment, useEffect } from "react";
/* components */
import { TopBar } from "components/TopBar";
/* modules */
/* helpers */
import { updateQs } from "helpers/queryString";
/* assets */
/* constants */
import { QS_KEYS } from "constants/qs";
/* types */
import { LayoutProps } from "./Layout.types";
/* styles */

export const Layout: FC<LayoutProps> = ({ children, withSearchbar }) => {
    return (
        <Fragment>
            <TopBar
                onSearch={text => updateQs("query", text)}
                withSearchbar={withSearchbar}
            />
            {children}
        </Fragment>
    );
};
