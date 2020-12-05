import React from "react";
import { routers } from "./routers";
import { Redirect, Switch, useLocation } from "react-router-dom";
import { AuthRoute } from "services/auth/AuthRoute";
import { Route } from "components/Route";
import { uniqueId } from "helpers/uniqueId";

const Router = () => {
    const location = useLocation();

    const pages = routers.map(route => {
        const {
            component: Component,
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
                    key={uniqueId()}
                    path={path}
                    exact={exact}
                    component={Component!}
                    authUser={true}
                />
            );
        }

        return (
            <Route
                permissionKey={permissionKey}
                key={uniqueId()}
                path={path}
                exact={exact}
                withLayout={withLayout}
                component={Component}
            />
        );
    });

    return <Switch location={location}>{pages}</Switch>;
};

export default Router;
