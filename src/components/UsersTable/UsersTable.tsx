import React, { FunctionComponent } from "react";
/* components */
import { Table } from "components/Table";
import { ColumnsType } from "antd/lib/table";
/* modules */
/* helpers */
import { uniqueId } from "helpers/uniqueId";
import { RenderActionsColumn, RenderColumnName } from "./columns";
/* assets */
/* types */
import { UsersTableComponentProps } from "./UsersTable.types";
import { mock } from "helpers/mock";
/* styles */
// todo -> make this structure better
export type UsersDataSourceType = {
    id: string;
    name: string;
    username: string;
    emailAddress: string;
};
const dataSource = mock("users", 20);

export const UsersTable: FunctionComponent<UsersTableComponentProps> = props => {
    const { className, onDeleteUser, ...restProps } = props;

    const columns: ColumnsType<UsersDataSourceType> = [
        {
            title: "نام",
            dataIndex: "name",
            key: "name",
            render: (name, record, index) => (
                <RenderColumnName<UsersDataSourceType>
                    name={name}
                    record={record}
                    index={index}
                />
            ),
        },
        {
            title: "نام کاربری",
            dataIndex: "username",
            key: "username",
        },
        {
            title: "آدرس ایمیل",
            dataIndex: "emailAddress",
            key: "emailAddress",
        },
        {
            title: "عملیات",
            dataIndex: "",
            key: "x",
            render: (name, record, index) => (
                <RenderActionsColumn<UsersDataSourceType>
                    name={name}
                    record={record}
                    onDeleteUser={onDeleteUser}
                    index={index}
                />
            ),
        },
    ];

    return (
        <Table
            {...restProps}
            pagination={{ hideOnSinglePage: true }}
            dataSource={dataSource}
            columns={columns}
            showHeader
        />
    );
};
