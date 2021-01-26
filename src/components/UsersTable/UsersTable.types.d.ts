import { TableProps } from 'antd/lib/table';

type BaseUsersTableComponentProps = {
    onDeleteUser: ({ userId: string }) => void;
};
export type UsersTableComponentProps = BaseUsersTableComponentProps &
    TableProps;
