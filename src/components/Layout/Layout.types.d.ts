import { HTMLProps } from "react";

export type LayoutTypes = { withSearchbar: boolean };

export type LayoutProps = HTMLProps<HTMLDivElement> &
    LayoutTypes &
    RouteComponentProps;
