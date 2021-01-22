import React, { FC, Fragment } from "react";
import { AclComponentProps } from "./Acl.types.d";
import { useCanPerform } from "hooks/useCanPerform";
import { isBoolean } from "lodash/fp";

export const AclService: FC<AclComponentProps> = ({ permission, children }) => {
    const canPerform = useCanPerform(permission);

    if (isBoolean(permission)) {
        const canPerform = permission;
        return <Fragment>{canPerform ? children : false}</Fragment>;
    }

    return <Fragment>{canPerform ? children : false}</Fragment>;
};
