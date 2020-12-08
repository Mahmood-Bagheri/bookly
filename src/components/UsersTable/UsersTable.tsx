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
/* styles */
// todo -> make this structure better
type DataSourceType = {
    id: string;
    name: string;
    username: string;
    emailAddress: string;
};
const dataSource: DataSourceType[] = [
    {
        id: uniqueId(),
        name: "محمود",
        username: "Mahmood",
        emailAddress: "محمود دات باقری ات ساین جیمیل دات کام",
    },
    {
        id: uniqueId(),
        name: "مایک",
        username: "Mike",
        emailAddress: "مایک جک زاده ات ساین اوت لوک دات کام",
    },
];

export const UsersTable: FunctionComponent<UsersTableComponentProps> = props => {
    const { className, onDeleteUser, ...restProps } = props;

    const columns: ColumnsType<DataSourceType> = [
        {
            title: "نام",
            dataIndex: "name",
            key: "name",
            render: (name, record, index) => (
                <RenderColumnName<DataSourceType>
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
                <RenderActionsColumn<DataSourceType>
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
        />
    );
};
