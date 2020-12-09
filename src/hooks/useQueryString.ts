import {
    ParseOptions,
    StringifyOptions,
    parse,
    stringify,
    ParsedQuery,
    StringifiableRecord,
} from "query-string";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { History } from "history";
import { QueryStringKeys } from "types/qs";

const pushQueryString = (
    history: History,
    newQuery: StringifiableRecord,
    stringifyOptions?: StringifyOptions
) => {
    return history.push(
        history.location.pathname + "?" + stringify(newQuery, stringifyOptions)
    );
};

export function useQueryString(
    parseOptions?: ParseOptions,
    stringifyOptions?: StringifyOptions
): [ParsedQuery, (key: QueryStringKeys, values: string) => void] {
    const history = useHistory();
    const location = useLocation();
    const [state, setState] = useState(parse(location.search, parseOptions));

    function setQuery(key: QueryStringKeys, values: string): void {
        const newQuery = {
            ...state,
            [key]: values,
        };

        setState(newQuery);
        pushQueryString(history, newQuery, stringifyOptions);
    }

    return [state, setQuery];
}
