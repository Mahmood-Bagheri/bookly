import React from "react";

// * modules
import { Redirect } from "react-router-dom";
import { Route } from "components/Route";
import { FunctionComponent, ComponentType } from "react";
import { routeTo } from "helpers/routeTo";

type AuthRouteProps = {
    path: string;
    component: ComponentType;
    authUser: boolean;
    exact: boolean;
    permissionKey: string;
};

export const AuthRoute: FunctionComponent<AuthRouteProps> = ({
    component: Component,
    authUser,
    exact,
    permissionKey,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            permissionKey={permissionKey}
            exact={exact}
            render={props =>
                authUser ? (
                    <Component {...(props as any)} />
                ) : (
                    <Redirect
                        to={{
                            pathname: routeTo("login"),
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};
