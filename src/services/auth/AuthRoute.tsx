import React from "react";

// * modules
import { Redirect } from "react-router-dom";
import { Route } from "components/Route";
import { FunctionComponent, ComponentType } from "react";
import { routeTo } from "helpers/routeTo";

declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
    ? Props extends object
        ? Props
        : never
    : never;

type AuthRouteProps = $ElementProps<typeof Route> & {
    component: ComponentType;
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
