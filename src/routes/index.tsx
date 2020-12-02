import React from "react";
import { routers } from "./routers";
import { Redirect, Switch, useLocation } from "react-router-dom";
import { AuthRoute } from "services/auth/AuthRoute";
import { Route } from "components/Route";

const Router = () => {
    const location = useLocation();

    const pages = routers.map(route => {
        const {
            component,
            exact,
            path,
            requireAuth,
            permissionKey,
            to,
            withLayout = true,
        } = route;

        if (to) {
            return <Redirect from={path} to={to} />;
        }

        if (requireAuth) {
            return (
                <AuthRoute
                    permissionKey={permissionKey}
                    key={`${path.replace(/\//g, "_")}_${exact && "exact"}`}
                    path={path}
                    exact={exact}
                    component={component}
                    authUser={true}
                />
            );
        }
        return (
            <Route
                permissionKey={permissionKey}
                key={`${path.replace(/\//g, "_")}_${exact && "exact"}`}
                path={path}
                exact={exact}
                component={component}
                withLayout={withLayout}
            />
        );
    });
    return <Switch location={location}>{pages}</Switch>;
};

export default Router;
