import React, { FC, Fragment } from "react";
/* components */
import { TopBar } from "components/TopBar";
/* modules */
import { useQueryString } from "hooks/useQueryString";
/* helpers */
/* assets */
/* constants */
/* types */
import { LayoutProps } from "./Layout.types";
/* styles */

export const Layout: FC<LayoutProps> = ({ children, withSearchbar }) => {
    const [, setQueryString] = useQueryString();

    return (
        <Fragment>
            <TopBar
                onSearch={text => setQueryString("query", text)}
                withSearchbar={withSearchbar}
            />
            {children}
        </Fragment>
    );
};
