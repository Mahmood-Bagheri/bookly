import React from 'react';
import { routers } from './routers';
import { Redirect, Switch, useLocation } from 'react-router-dom';
import { AuthRoute } from 'services/auth/AuthRoute';
import { Route } from 'components/Route';
import { uniqueId } from 'helpers/uniqueId';

const Router = () => {
    const location = useLocation();

    const pages = routers.map(route => {
        const { component: Component, exact, path, config, to } = route;
        const { requireAuth, permissionKey, layout } = config;

        if (to) {
            return <Redirect from={path as string} to={to} />;
        }

        if (requireAuth) {
            return (
                <AuthRoute
                    withSearchbar={layout.searchbar}
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
                withSearchbar={layout.searchbar}
                withLayout={layout.include}
                permissionKey={permissionKey}
                key={uniqueId()}
                path={path}
                exact={exact}
                component={Component}
            />
        );
    });

    return <Switch location={location}>{pages}</Switch>;
};

export default Router;
