import { history } from "./history";

export const updateQs = (queryText: string) => {
    history.push({
        search: `?${new URLSearchParams({ queryText }).toString()}`,
    });
};
