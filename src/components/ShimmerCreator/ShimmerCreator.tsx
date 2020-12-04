import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import React, { FunctionComponent, ReactNode } from "react";

type ShimmerCreatorProps = {
    count?: number;
    component?: any;
    parentStyle?: string;
    componentStyle?: string;
};

export const ShimmerCreator = (props: ShimmerCreatorProps) => {
    const {
        count = 10,
        component: Component = null,
        parentStyle = "",
        componentStyle = "",
    } = props;

    return <Component className={componentStyle} />;
};
