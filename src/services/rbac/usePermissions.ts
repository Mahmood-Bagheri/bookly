import { permissions } from "services/rbac/permissions";

export function usePermissions() {
    return {
        permissions,
    };
}
