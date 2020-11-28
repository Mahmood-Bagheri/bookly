import * as React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface LinkProps {}
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type RouterLinkProps = Omit<NavLinkProps, "href">;

export const Link = <T extends {}>(
    props: LinkProps & T extends RouterLinkProps ? RouterLinkProps : AnchorProps
) => {
    if ((props as RouterLinkProps).to) {
        return <NavLink {...(props as RouterLinkProps)} />;
    } else {
        return <a {...(props as AnchorProps)} />;
    }
};

const Usage = () => {
    return (
        <div>
            <Link<RouterLinkProps> to="/">My link</Link>; // ok
            <Link<AnchorProps> href="/">My link</Link>; // ok
            <Link<RouterLinkProps> to="/">My link</Link>; // error
        </div>
    );
};