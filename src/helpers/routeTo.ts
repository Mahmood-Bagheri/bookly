import { generatePath } from "react-router-dom";
import { stringify } from "qs";
import get from "lodash/get";
import __ROUTES__ from "constants/routes";

type PathType = keyof typeof __ROUTES__;
type ParamsType = { [paramName: string]: string | number | boolean };

export const routeTo = (
    path: PathType,
    params?: ParamsType,
    queryString?: object
) => {
    const url = generatePath(get(__ROUTES__, path), params);
    return queryString ? `${url}?${stringify(queryString)}` : url;
};
