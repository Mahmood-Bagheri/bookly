import React from "react";

// * modules
import { Redirect, RouteComponentProps } from "react-router-dom";
import { Route } from "components/Route";
import { FunctionComponent, ComponentType } from "react";
import { routeTo } from "helpers/routeTo";

type AuthRouteProps = {
    path: string;
    component: ComponentType<RouteComponentProps>;
    authUser: boolean;
};

export const AuthRoute: FunctionComponent<AuthRouteProps> = ({
    component: Component,
    authUser,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                authUser ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: routeTo("error"),
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
