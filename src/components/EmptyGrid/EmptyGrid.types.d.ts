import { HTMLProps } from "react";

export type EmptyGridTypes = {
    query?: string;
};

export type EmptyGridProps = HTMLProps<HTMLDivElement> & EmptyGridTypes;
