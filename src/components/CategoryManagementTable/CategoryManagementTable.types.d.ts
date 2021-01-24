import { TableProps } from "antd/lib/table";

export type CategoryManagementTableTypes = {
    categories: Category.Query.Result[];
};

export type CategoryManagementTableProps = TableProps<any> &
    CategoryManagementTableTypes;
