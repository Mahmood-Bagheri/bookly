import React, { FC, Fragment } from "react";
import { AclComponentProps } from "./Acl.types.d";
import { useCanPerform } from "hooks/useCanPerform";

export const AclService: FC<AclComponentProps> = ({ permission, children }) => {
    const canPerform = useCanPerform(permission);
    return <Fragment>{canPerform ? children : false}</Fragment>;
};
