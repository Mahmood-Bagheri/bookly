import React, { Suspense, FunctionComponent } from "react";
import { Switch, Redirect, useRouteMatch } from "react-router-dom";
import { Route } from "components/Route";

/* route constants */
import __ROUTES__ from "constants/routes";

const Dashboard = React.lazy(
    () => import(/* webpackChunkName: "viwes-dashboard" */ "./dashboard")
);

const App: FunctionComponent = () => {
    const match = useRouteMatch();

    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect
                    exact
                    from={`${match.url}/`}
                    to={__ROUTES__.dashboard}
                />

                <Route path={__ROUTES__.dashboard} component={Dashboard} />

                <Redirect to={__ROUTES__.error} />
            </Switch>
        </Suspense>
    );
};

export default App;
