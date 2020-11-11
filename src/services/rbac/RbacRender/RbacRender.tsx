/* modules */
import { usePermissions } from "services/rbac";
import { get } from "lodash";
/* helpers */
/* assets */
/* types */
import { RbacRenderComponent } from "./RbacRender.types.d";

export const RbacRender: RbacRenderComponent = ({ permission, children }) => {
    const { role, permissions } = usePermissions();
    const canPerform = get(permissions, `${role}.${permission}`);
    return canPerform ? children : null;
};
