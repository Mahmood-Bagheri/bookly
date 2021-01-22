import React, { FunctionComponent, useRef, useState } from "react";
/* components */
import { Table } from "components/Table";
import { ColumnsType } from "antd/lib/table";
/* modules */
/* helpers */
import { RenderActionsColumn, RenderColumnName } from "./columns";
/* assets */
/* types */
import { UsersTableComponentProps } from "./UsersTable.types";
import { getColumnSearchProps } from "./lib";
import { useUsers } from "hooks";
/* styles */
/*
 * todo {
 *   make the structure better
 * remove all that any shits :|
 * }
 */
export type UsersDataSourceType = {
    _id: string;
    name: string;
    username: string;
    emailAddress: string;
};

export const UsersTable: FunctionComponent<UsersTableComponentProps> = props => {
    const { className, onDeleteUser, ...restProps } = props;

    // const dataSource = mock("users", 20);
    const { data: users } = useUsers();
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");

    const inputRef = useRef<any>(null!);
    const handleSearch = (
        selectedKeys: any[],
        confirm: Function,
        dataIndex: string
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: Function) => {
        clearFilters();
        setSearchText("");
    };

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
            ...getColumnSearchProps(
                "username",
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),
        } as any,
        {
            title: "آدرس ایمیل",
            dataIndex: "emailAddress",
            key: "emailAddress",
            ...getColumnSearchProps(
                "emailAddress",
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),
        } as any,
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
            dataSource={users}
            columns={columns}
        />
    );
};
