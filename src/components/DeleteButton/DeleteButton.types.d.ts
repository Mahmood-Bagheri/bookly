import { PopconfirmProps } from "antd/lib/popconfirm";

export type DeleteButtonComponentProps = PopconfirmProps & {
    permission: string;
    loading?: boolean;
};
