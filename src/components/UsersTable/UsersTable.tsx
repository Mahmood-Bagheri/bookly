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
import { Profile } from "types/profile";
import { RoleUnionType } from "components/UserBox";
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

    const columns: ColumnsType<Profile.Query.Result> = [
        {
            title: "نام",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps(
                "name",
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),

            // render: (name, record, index) => (
            //     <RenderColumnName<UsersDataSourceType>
            //         name={name}
            //         record={record}
            //         index={index}
            //     />
            // ),
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
            title: "نقش",
            dataIndex: "role",
            key: "role",
            ...getColumnSearchProps(
                "role",
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),
            render: (name, record, index) => (
                <div>{transformRole(record.role)}</div>
            ),
        },
        {
            title: "عملیات",
            dataIndex: "",
            key: "x",
            render: (name, record, index) => (
                <RenderActionsColumn<Profile.Query.Result>
                    name={name}
                    record={record as any}
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

const transformRole = (role: RoleUnionType) => {
    switch (role) {
        case "ADMIN":
            return "مدیر";
        case "AUTHOR":
            return "نویسنده";
        case "USER":
            return "کاربر";
        default:
            return "بدون نقش!";
    }
};
