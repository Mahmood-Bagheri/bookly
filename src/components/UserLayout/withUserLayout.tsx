import React, { Fragment } from 'react';
import { Row } from 'components/Row';
import { Col } from 'components/Col';
import { UserLayout } from './UserLayout';

export const withUserLayout = <BaseProps extends {}>(
    BaseComponent: React.ComponentType<BaseProps>
) => {
    return (props: BaseProps) => {
        return (
            <Fragment>
                <BaseComponent {...props} />
            </Fragment>
        );
    };
};
