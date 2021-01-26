import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { AclService, Permission } from 'services/rbac';
import { propsSeprator as isPropsForRouterLink } from 'helpers/propsSeprator';
import { omit } from 'lodash';
import { Path } from 'types/global';

type LinkProps = {
    permission: Path<Permission>;
};
export type AnchorProps = JSX.IntrinsicElements['a'];
export type RouterLinkProps = Omit<NavLinkProps, 'href'> & LinkProps;

export const Link = <T extends {}>(
    props: T extends RouterLinkProps ? RouterLinkProps & LinkProps : AnchorProps
) => {
    if (isPropsForRouterLink<RouterLinkProps, AnchorProps>(props, 'to')) {
        // * to avoid passing extra permission props to the parsed a tag
        const restProps = omit<RouterLinkProps>(props, ['permission']);
        return (
            <AclService permission={props.permission}>
                <NavLink {...(restProps as RouterLinkProps)} />
            </AclService>
        );
    }
    return <a {...(props as AnchorProps)} />;
};
