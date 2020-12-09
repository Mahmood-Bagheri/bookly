import { PopconfirmProps } from "antd/lib/popconfirm";

export type DeleteButtonProps = PopconfirmProps & {
    permission: string;
    loading?: boolean;
};
