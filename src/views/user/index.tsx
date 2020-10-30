import React, { Suspense, FunctionComponent } from "react";
import { Switch, Redirect, RouteComponentProps } from "react-router-dom";
import { Route } from "components/Route";

/* route constants */
import __ROUTES__ from "constants/routes";

const Login = React.lazy(
    () => import(/* webpackChunkName: "user-login" */ "./login")
);

type UserProps = RouteComponentProps & {};

const User: FunctionComponent<UserProps> = ({ match }) => {
    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={__ROUTES__.login} />

                <Route path={__ROUTES__.login} component={Login} />

                <Redirect to={__ROUTES__.error} />
            </Switch>
        </Suspense>
    );
};

export default User;
