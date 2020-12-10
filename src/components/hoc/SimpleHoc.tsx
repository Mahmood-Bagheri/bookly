import * as React from "react";

type PropsAreEqual<P> = (
    prevProps: Readonly<P>,
    nextProps: Readonly<P>
) => boolean;

export const withSimpleHoc = <P extends {}>(
    component: {
        (props: P): Exclude<React.ReactNode, undefined>;
        displayName?: string;
    },
    propsAreEqual?: PropsAreEqual<P> | false,

    componentName = component.displayName ?? component.name
): {
    (props: P): JSX.Element;
    displayName: string;
} => {
    function withSimpleHoc(props: P) {
        //Do something special to justify the HoC.
        return component(props) as JSX.Element;
    }

    withSimpleHoc.displayName = `withSimpleHoc(${componentName})`;

    let wrappedComponent =
        propsAreEqual === false
            ? withSimpleHoc
            : React.memo(withSimpleHoc, propsAreEqual);

    //copyStaticProperties(component, wrappedComponent);

    return wrappedComponent as typeof withSimpleHoc;
};
