import React, { FunctionComponent } from "react";
/* components */
import { Layout } from "components/Layout";
/* modules */
import {
    Redirect,
    Route as ReactRouterRoute,
    RouteProps,
} from "react-router-dom";
import { AclService } from "services/rbac";
import { useCanPerform } from "hooks/useCanPerform";
import { routeTo } from "helpers/routeTo";
/* types */
type RouteComponentProps = RouteProps & {
    permissionKey: string;
    withLayout?: boolean;
};

export const Route: FunctionComponent<RouteComponentProps> = ({
    permissionKey,
    withLayout = true,
    ...restProps
}) => {
    const LayoutPlaceholder = withLayout ? Layout : React.Fragment;
    const canPerform = useCanPerform(permissionKey);

    if (canPerform) {
        return (
            <AclService permission={permissionKey}>
                <LayoutPlaceholder>
                    <ReactRouterRoute {...restProps} />
                </LayoutPlaceholder>
            </AclService>
        );
    }
    return <Redirect to={routeTo("home")} />;
};
