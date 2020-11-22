import React from "react";
import { routers } from "./routers";
import { Route, Switch, useLocation } from "react-router-dom";
const Router = () => {
    const location = useLocation();
    const pages = routers.map(route => {
        const { component: Component, exact, path, props } = route;
        return (
            <Route
                key={`${path.replace(/\//g, "_")}_${exact && "exact"}`}
                path={path}
                exact={exact}
                render={routeProps => <Component {...routeProps} {...props} />}
            />
        );
    });
    return <Switch location={location}>{pages}</Switch>;
};

export default Router;
