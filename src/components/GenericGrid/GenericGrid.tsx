import * as React from "react";
import { Row } from "components/Row";
import { isEmptyArray } from "helpers/isEmptyArray";
import { EmptyGrid } from "components/EmptyGrid";
import { useQueryString } from "hooks/useQueryString";

type Props<T> = {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    filter?: (item: T, index: number) => boolean;
    withRow?: boolean;
};

export function GenericGrid<T>(props: Props<T>) {
    const { items, renderItem, filter = () => true, withRow = false } = props;

    const RowPlaceholder = withRow ? Row : React.Fragment;
    const filtered = items.filter(filter);
    const query = useQueryString("query");

    if (isEmptyArray(filtered)) {
        return <EmptyGrid query={query} />;
    }

    return <RowPlaceholder>{filtered.map(renderItem)}</RowPlaceholder>;
}
