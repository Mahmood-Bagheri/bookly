import React, { FunctionComponent } from "react";

/* modules */
import { QueryCache, ReactQueryCacheProvider } from "react-query";

export const ReactQueryService: FunctionComponent = props => {
    const { children } = props;
    const queryCache = new QueryCache({});

    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            {children}
        </ReactQueryCacheProvider>
    );
};
