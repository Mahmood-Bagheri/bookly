import React, { FunctionComponent } from "react";
import { RecoilRoot } from "recoil";

export const RecoilService: FunctionComponent = props => {
    const { children } = props;
    return <RecoilRoot>{children}</RecoilRoot>;
};
