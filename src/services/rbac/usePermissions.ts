import { useRecoilState } from "recoil";
import { permissions } from "services/rbac";
import { userState } from "services/recoil/user/atoms";

export function usePermissions() {
    const [user] = useRecoilState(userState);
    return {
        permissions,
        role: user.role,
    };
}
