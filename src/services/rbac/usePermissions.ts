import { useRecoilState } from "recoil";
import { permissions } from "services/rbac/permissions";
import { roleState } from "services/recoil/user/atoms";

export function usePermissions() {
    const [role] = useRecoilState(roleState);

    return {
        permissions,
        role,
    };
}
