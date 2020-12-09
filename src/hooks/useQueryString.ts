import { parseQueryString, QSKeys } from "helpers/queryString";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// todo -> make this hook generic
export const useQueryString = (key: QSKeys) => {
    const history = useHistory();
    const urlQuery = parseQueryString(history.location.search, key);
    const [queryString, setQueryString] = useState<string>(urlQuery || "");
    useEffect(() => {
        setQueryString(urlQuery);
    }, [history.location.search]);

    return queryString;
};

/* 
import {
    ParseOptions,
    ParsedQuery,
    StringifyOptions,
    parse,
    stringify,
} from "query-string";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

export interface QueryStringResult<T> {
    [0]: ParsedQuery<T>;
    [1]: (values: T) => void;
}

export function useQueryString<T>(
    parseOptions?: ParseOptions,
    stringifyOptions?: StringifyOptions
) {
    const history = useHistory();
    const location = useLocation();
    const [state, setState] = useState<T>(
        parse<T>(location.search, parseOptions)
    );

    function setQuery(values: T): void {
        const newQuery = {
            ...state,
            ...values,
        };

        setState(newQuery);
        history.push(
            location.pathname + "?" + stringify<T>(newQuery, stringifyOptions)
        );
    }

    return [state, setQuery];
}

*/
