import React from "react";
import { routers } from "./routers";
import { Switch, useLocation } from "react-router-dom";
import { AuthRoute } from "services/auth/AuthRoute";
import { Layout } from "components/Layout";
import { Route } from "components/Route";

const Router = () => {
    const location = useLocation();

    const pages = routers.map(route => {
        const { component, exact, path, requireAuth, permissionKey } = route;

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
            />
        );
    });
    return (
        <Layout>
            <Switch location={location}>{pages}</Switch>
        </Layout>
    );
};

export default Router;
