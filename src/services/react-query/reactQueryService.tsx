import React, { FunctionComponent } from "react";
import { message } from "antd";

/* modules */
import { QueryCache, ReactQueryCacheProvider } from "react-query";

export const ReactQueryService: FunctionComponent = props => {
    const { children } = props;
    const queryCache = new QueryCache({
        defaultConfig: {
            // todo -> make retry true
            queries: { retry: false },
            mutations: {
                /* TODO -> make this shit work in TS */
                onError: (err: any) => {
                    message.error(err.message);
                },
            },
        },
    });

    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            {children}
        </ReactQueryCacheProvider>
    );
};
