import React from "react";

// * modules
import { Redirect } from "react-router-dom";
import { CustomRouteComponentProps, Route } from "components/Route";
import { FunctionComponent, ComponentType } from "react";
import { routeTo } from "helpers/routeTo";

type Props = CustomRouteComponentProps & {
    component: ComponentType;
    authUser: boolean;
};

export const AuthRoute: FunctionComponent<Props> = ({
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
