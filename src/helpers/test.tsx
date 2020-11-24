import React, { FunctionComponent } from "react";
/* modules */
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { history } from "helpers/history";
/* services */
import { RecoilService } from "services/recoil/recoilService";
import { ReactQueryService } from "services/react-query/reactQueryService";
import { ConfigProvider } from "antd";

export const setupWrapper = <BaseProps extends {}>(
    Component: FunctionComponent<BaseProps>,
    props: BaseProps
) =>
    render(
        <RecoilService>
            <ReactQueryService>
                <ConfigProvider direction="rtl">
                    <Router history={history}>
                        <Component {...(props as BaseProps)} />
                    </Router>
                </ConfigProvider>
            </ReactQueryService>
        </RecoilService>
    );
