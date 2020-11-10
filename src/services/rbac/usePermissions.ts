import { useRecoilState } from "recoil";
import { permissions } from "services/rbac";
import { roleState } from "services/recoil/user/atoms";

export function usePermissions() {
    const [role] = useRecoilState(roleState);
    return {
        permissions,
        role,
    };
}
