import React, { FunctionComponent } from 'react';
import { message } from 'antd';

/* modules */
import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const mutationConfig = {
    mutations: {
        /* TODO -> make this shit work in TS */
        onError: (err: any) => {
            message.error(err.message);
        },
    },
};
const queryConfig = {
    // todo -> make retry true
    queries: { retry: false, refetchOnWindowFocus: false },
};

export const queryCache = new QueryCache({
    defaultConfig: {
        ...queryConfig,
        ...mutationConfig,
    },
});

export const ReactQueryService: FunctionComponent = props => {
    const { children } = props;

    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            {children}
        </ReactQueryCacheProvider>
    );
};
