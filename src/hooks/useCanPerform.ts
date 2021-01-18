import { get } from "lodash";
import { usePermissions } from "services/rbac";

export const useCanPerform = (permission: string) => {
    const { role, permissions } = usePermissions();
    console.log(permission);
    const canPerform = get(permissions, `${role}.${permission}`);
    if (canPerform === undefined) {
        throw new Error("Permission not found!");
    }
    return canPerform;
};
