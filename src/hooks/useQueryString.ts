import { parseQueryString, QSKeys } from "helpers/queryString";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

export const useQueryString = (key: QSKeys) => {
    const history = useHistory();
    const urlQuery = parseQueryString(history.location.search, key);
    const [queryString, setQueryString] = useState<string>(urlQuery || "");
    useEffect(() => {
        setQueryString(urlQuery);
    }, [history.location.search]);

    return queryString;
};
