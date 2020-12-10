import React from "react";

export function injectDefaultProps<TProps, TInjectedKeys extends keyof TProps>(
    Component: React.JSXElementConstructor<TProps>,
    injector: Pick<TProps, TInjectedKeys>
) {
    return function Injected(props: TProps) {
        return <Component {...injector} {...(props as TProps)} />;
    };
}
