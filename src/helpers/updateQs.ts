import { history } from "./history";

export const updateQs = (key: string, query: string) => {
    history.push({
        search: `?${new URLSearchParams({ [key]: query }).toString()}`,
    });
};
