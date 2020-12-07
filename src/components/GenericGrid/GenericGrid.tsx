import * as React from "react";
import { Row } from "components/Row";

interface Props<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    filter?: (item: T, index: number) => boolean;
    withRow?: boolean;
}

export function GenericGrid<T>(props: Props<T>) {
    const {
        items,
        renderItem,
        filter = () => true,
        withRow: shouldAddRowTagBeforeGrid = false,
    } = props;
    const RowPlaceholder = shouldAddRowTagBeforeGrid ? Row : React.Fragment;
    return (
        <RowPlaceholder>{items.filter(filter).map(renderItem)}</RowPlaceholder>
    );
}
