import React from "react";

// inject static values to a component so that they're always provided
export function inject<TProps, TInjectedKeys extends keyof TProps>(
    Component: React.JSXElementConstructor<TProps>,
    injector: Pick<TProps, TInjectedKeys>
) {
    return function Injected(props: TProps) {
        return <Component {...injector} {...(props as TProps)} />;
    };
}
