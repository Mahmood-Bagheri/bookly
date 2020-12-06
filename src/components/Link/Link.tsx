import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { AclService } from "services/rbac";
import { propsSeprator as isPropsForRouterLink } from "helpers/propsSeprator";

// todo -> checkout why the intellisense not working ?

type LinkProps = {
    permission: string;
};
export type AnchorProps = JSX.IntrinsicElements["a"];
export type RouterLinkProps = Omit<NavLinkProps, "href"> & LinkProps;

export const Link = <T extends {}>(
    props: T extends RouterLinkProps ? RouterLinkProps & LinkProps : AnchorProps
) => {
    if (isPropsForRouterLink<RouterLinkProps, AnchorProps>(props, "to")) {
        return (
            <AclService permission={props.permission}>
                <NavLink {...(props as RouterLinkProps)} />
            </AclService>
        );
    }
    return <a {...(props as AnchorProps)} />;
};

// const Usage = () => {
//     return (
//         <div>
//             <Link<RouterLinkProps> to="/">My link</Link>; // ok
//             <Link<AnchorProps> href="/">My link</Link>; // ok
//             <Link<RouterLinkProps> to="/">My link</Link>; // error
//         </div>
//     );
// };

/* // deprecated
import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { AclService } from "services/rbac";

type LinkProps = {
    permission: string;
};
type RouterLinkProps = Omit<NavLinkProps, "href"> & LinkProps;

export const Link = (props: LinkProps & RouterLinkProps) => {
    return (
        <AclService permission={props.permission}>
            <NavLink {...(props as RouterLinkProps)} />
        </AclService>
    );
};
 */
