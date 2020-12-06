import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import { AclService } from "services/rbac";

type LinkProps = {
    permission: string;
};
export type AnchorProps = JSX.IntrinsicElements["a"];
export type RouterLinkProps = Omit<NavLinkProps, "href"> & LinkProps;

function isPropsForRouterLink(
    props: AnchorProps | RouterLinkProps
): props is RouterLinkProps {
    return "permission" in props;
}

// todo -> why the intellisense not working ?! maybe a type mismatch ...
export const Link = <T extends {}>(
    props: T extends RouterLinkProps ? RouterLinkProps & LinkProps : AnchorProps
) => {
    if (isPropsForRouterLink(props)) {
        return (
            <AclService permission={props.permission}>
                <NavLink {...(props as RouterLinkProps)} />
            </AclService>
        );
    } else {
        return <a {...(props as AnchorProps)} />;
    }
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
