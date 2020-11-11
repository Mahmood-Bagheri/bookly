import { usePermissions } from "services/rbac";
import { get } from "lodash";
import { AclComponentProps } from "./Acl.types.d";

export const AclService: AclComponentProps = ({ permission, children }) => {
    const { role, permissions } = usePermissions();
    const canPerform = get(permissions, `${role}.${permission}`);
    return canPerform ? children : null;
};
