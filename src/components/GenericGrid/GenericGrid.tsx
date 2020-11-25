import * as React from "react";
import { Row } from "components/Row";

interface Props<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
    withRow?: boolean;
}

export function GenericGrid<T>(props: Props<T>) {
    const { items, renderItem, withRow = false } = props;
    const RowPlaceholder = withRow ? Row : React.Fragment;
    return <RowPlaceholder>{items.map(renderItem)}</RowPlaceholder>;
}
