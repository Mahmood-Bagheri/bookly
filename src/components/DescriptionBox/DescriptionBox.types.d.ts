import { ComponentPropsWithoutRef } from "react";

export type DescriptionBox = {
    title?: string;
    description: string;
};

export type DescriptionBoxProps = ComponentPropsWithoutRef<"div"> &
    DescriptionBox;
