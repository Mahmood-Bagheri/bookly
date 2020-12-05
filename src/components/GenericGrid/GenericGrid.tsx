import * as React from "react";
import { Row } from "components/Row";

interface Props<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    filter?: (item: T, index: number) => boolean;
    withRow?: boolean;
}

const defaultFilter = () => true;
const defaultWithRow = false;

export function GenericGrid<T>(props: Props<T>) {
    const {
        items,
        renderItem,
        filter = defaultFilter,
        withRow: shouldAddRowTagBeforeGrid = defaultWithRow,
    } = props;

    const RowPlaceholder = shouldAddRowTagBeforeGrid ? Row : React.Fragment;

    return (
        <RowPlaceholder>{items.filter(filter).map(renderItem)}</RowPlaceholder>
    );
}
