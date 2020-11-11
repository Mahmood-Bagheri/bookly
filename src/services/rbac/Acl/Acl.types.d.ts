import { ReactElement } from "react";

export type AclProps = {
    permission: string;
};

type AclComponent = ({
    permission,
    children,
}: {
    permission: string;
    children: any;
}) => ReactElement;

export type AclComponentProps = AclComponent;
