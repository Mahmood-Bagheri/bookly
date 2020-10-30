import React, { Suspense, FunctionComponent } from "react";
import { Route, Switch, Redirect, useRouteMatch } from "react-router-dom";

/* route constants */
import __ROUTES__ from "constants/routes";

const Intro = React.lazy(
    () => import(/* webpackChunkName: "viwes-dashboard-intro" */ "./Intro")
);

const Dashboard: FunctionComponent = () => {
    const match = useRouteMatch();

    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect
                    exact
                    from={`${match.url}/`}
                    to={__ROUTES__.dashboardIntro}
                />

                <Route path={__ROUTES__.dashboardIntro} component={Intro} />

                <Redirect to={__ROUTES__.error} />
            </Switch>
        </Suspense>
    );
};

export default Dashboard;
