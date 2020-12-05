import React, { FunctionComponent } from "react";
/* components */
import { Layout } from "components/Layout";
/* modules */
import {
    Redirect,
    Route as ReactRouterRoute,
    RouteComponentProps,
    RouteProps,
} from "react-router-dom";
import { AclService } from "services/rbac";
import { useCanPerform } from "hooks/useCanPerform";
import { routeTo } from "helpers/routeTo";
/* types */

export type CustomRouteComponentProps = RouteProps & {
    permissionKey: string;
    withLayout?: boolean;
    withSearchbar: boolean;
};

export const Route: FunctionComponent<CustomRouteComponentProps> = ({
    permissionKey,
    withLayout = true,
    withSearchbar,
    ...restProps
}) => {
    const canPerform = useCanPerform(permissionKey);

    if (canPerform) {
        if (withLayout) {
            return (
                <AclService permission={permissionKey}>
                    <Layout withSearchbar={withSearchbar}>
                        <ReactRouterRoute {...restProps} />
                    </Layout>
                </AclService>
            );
        }
        return (
            <AclService permission={permissionKey}>
                <ReactRouterRoute {...restProps} />
            </AclService>
        );
    }

    return <Redirect to={routeTo("home")} />;
};
