import { QS_KEYS } from "constants/qs";
import { history } from "helpers/history";
import { get } from "lodash";
import qs from "qs";

export type QSKeys = keyof typeof QS_KEYS;

export const updateQs = (key: QSKeys, query: string) => {
    history.push({
        search: `?${new URLSearchParams({ [key]: query }).toString()}`,
    });
};

export const parseQueryString = (search: string, key: QSKeys) => {
    return get(qs.parse(search, { ignoreQueryPrefix: true }), key) as string;
};
