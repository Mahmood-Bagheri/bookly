import { NProgress } from "components/NProgress";
import React, { FunctionComponent, useEffect } from "react";
import {
    Route as ReactRouterRoute,
    RouteProps,
    useLocation,
} from "react-router-dom";

type RouteComponentProps = RouteProps;

export const Route: FunctionComponent<RouteComponentProps> = props => {
    const location = useLocation();

    useEffect(() => {
        NProgress.start();
        NProgress.done();
    }, [location.pathname]);

    return <ReactRouterRoute {...props} />;
};
