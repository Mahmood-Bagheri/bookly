import React, { FC, Fragment } from "react";
/* components */
import { Layout } from "components/Layout";
/* modules */
import {
    Redirect,
    Route as ReactRouterRoute,
    RouteProps,
} from "react-router-dom";
import { useCanPerform } from "hooks/useCanPerform";
import { routeTo } from "helpers/routeTo";
/* types */

export type CustomRouteComponentProps = RouteProps & {
    permissionKey: string;
    withLayout?: boolean;
    withSearchbar: boolean;
};

export const Route: FC<CustomRouteComponentProps> = ({
    permissionKey,
    withLayout = true,
    withSearchbar,
    ...restProps
}) => {
    const canPerform = useCanPerform(permissionKey);

    const LayoutTag = withLayout ? Layout : Fragment;
    const layoutProps = {
        withSearchbar,
    };
    if (canPerform) {
        return (
            <LayoutTag {...layoutProps}>
                <ReactRouterRoute {...restProps} />
            </LayoutTag>
        );
    }

    return <Redirect to={routeTo("home")} />;
};
