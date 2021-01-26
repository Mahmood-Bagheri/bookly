import React, { FunctionComponent } from 'react';
import { RecoilRoot } from 'recoil';

export const RecoilService: FunctionComponent = ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};
