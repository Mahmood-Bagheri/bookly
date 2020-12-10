import { ComponentPropsWithRef } from "react";

export type NotFoundGridProps = {
    title: string;
    icon: string;
};

export type NotFoundComponentProps = Omit<
    ComponentPropsWithRef<"div">,
    keyof NotFoundGridProps
> &
    NotFoundGridProps;
