import { PopconfirmProps } from "antd/lib/popconfirm";
import { Permission } from "services/rbac";
import { Path } from "types/global";

export type DeleteButtonProps = PopconfirmProps & {
    permission: Path<Permission> | boolean;
    loading?: boolean;
};
