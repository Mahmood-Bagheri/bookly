import { TableProps } from 'antd/lib/table';

export type AuthorManagementTableTypes = {
    authors: Author.Query.Result[];
};

export type AuthorManagementTableProps = TableProps<any> &
    AuthorManagementTableTypes;
