import * as React from "react";

interface Props<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

export function GenericGrid<T>(props: Props<T>) {
    const { items, renderItem } = props;
    return <React.Fragment>{items.map(renderItem)}</React.Fragment>;
}
