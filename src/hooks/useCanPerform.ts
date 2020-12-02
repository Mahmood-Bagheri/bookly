import { get } from "lodash";
import { usePermissions } from "services/rbac";

export const useCanPerform = (permission: string) => {
    const { role, permissions } = usePermissions();
    return get(permissions, `${role}.${permission}`);
};
