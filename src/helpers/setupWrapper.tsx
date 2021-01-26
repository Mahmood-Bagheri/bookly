import React, { FunctionComponent } from 'react';
/* modules */
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { history } from 'helpers/history';
/* services */
import { RecoilService } from 'services/recoil/recoilService';
import { ReactQueryService } from 'services/react-query/reactQueryService';
import { ConfigProvider } from 'antd';

/**
 *
 * @param Component component that we want to test
 * @param props props of component that we want to test
 * @description setups the wrappers to prepare for testing
 */
export const setupWrapper = <BaseProps extends {}>(
    Component: FunctionComponent<BaseProps>,
    props: BaseProps
) =>
    render(
        <RecoilService>
            <ReactQueryService>
                <ConfigProvider direction='rtl'>
                    <Router history={history}>
                        <Component {...(props as BaseProps)} />
                    </Router>
                </ConfigProvider>
            </ReactQueryService>
        </RecoilService>
    );
