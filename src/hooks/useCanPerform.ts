import { get } from 'lodash';
import { isBoolean } from 'lodash/fp';
import { Permission, usePermissions } from 'services/rbac';
import { Path } from 'types/global';

export const useCanPerform = (permission: Path<Permission> | boolean) => {
    const { role, permissions } = usePermissions();

    const canPerform = get(permissions, `${role}.${permission}`);
    if (isBoolean(permission)) {
        return permission;
    }
    if (canPerform === undefined) {
        throw new Error('Permission not found!');
    }
    return canPerform;
};
