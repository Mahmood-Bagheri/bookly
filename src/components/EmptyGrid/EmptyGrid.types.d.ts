import { ComponentPropsWithRef } from "react";

export type EmptyGridTypes = {
    query?: string;
};

export type EmptyGridProps = ComponentPropsWithRef<"div"> & EmptyGridTypes;
