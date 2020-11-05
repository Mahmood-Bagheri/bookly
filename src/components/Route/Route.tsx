import React, { FunctionComponent, useEffect } from "react";
/* components */
import { NProgress } from "components/NProgress";
/* modules */
import {
    Route as ReactRouterRoute,
    RouteProps,
    useLocation,
} from "react-router-dom";
/* types */
type RouteComponentProps = RouteProps;

export const Route: FunctionComponent<RouteComponentProps> = props => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();
        NProgress.done();
    }, [location.pathname]);

    return <ReactRouterRoute {...props} />;
};
