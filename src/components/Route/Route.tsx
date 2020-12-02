import React, { FunctionComponent } from "react";
/* components */
/* modules */
import { Route as ReactRouterRoute, RouteProps } from "react-router-dom";
import { AclService } from "services/rbac";
/* types */
type RouteComponentProps = RouteProps & {
    permissionKey: string;
};

export const Route: FunctionComponent<RouteComponentProps> = ({
    permissionKey,
    ...restProps
}) => {
    return (
        <AclService permission={permissionKey}>
            <ReactRouterRoute {...restProps} />
        </AclService>
    );
};
