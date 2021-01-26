import React from 'react';
/* modules */
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Route } from 'components/Route';
import { FunctionComponent, ComponentType } from 'react';
/* helpers */
import { routeTo } from 'helpers/routeTo';
/* types */
import { $ElementProps } from 'types/global';
import { History } from 'history';

type AuthRouteProps = $ElementProps<typeof Route> & {
    component: ComponentType;
    authUser: boolean;
};

export const AuthRoute: FunctionComponent<AuthRouteProps> = ({
    component: Component,
    authUser,
    ...rest
}) => {
    const UnauthorizedRedirectionConfig: History.LocationDescriptor = {
        pathname: routeTo('login'),
        state: { from: rest.location },
    };

    const renderComponent = (props: RouteComponentProps) => {
        if (authUser) {
            return <Component {...props} />;
        }
        return <Redirect to={UnauthorizedRedirectionConfig} />;
    };
    return <Route {...rest} render={renderComponent} />;
};
