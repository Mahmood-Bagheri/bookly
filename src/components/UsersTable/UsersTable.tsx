import React, { FunctionComponent, useRef, useState } from 'react';
/* components */
import { Table } from 'components/Table';
import { ColumnsType } from 'antd/lib/table';
/* modules */
/* helpers */
import { RenderActionsColumn, RenderColumnName } from './columns';
/* assets */
/* types */
import { UsersTableComponentProps } from './UsersTable.types';
import { getColumnSearchProps } from './lib';
import { useChangeUserRole, useUsers } from 'hooks';
import { Profile } from 'types/profile';
import { RoleUnionType } from 'components/UserBox';
import { Select } from 'components/Select';
/* styles */
/*
 * todo {
 *   make the structure better
 * remove all that any shits :|
 * }
 */

export const UsersTable: FunctionComponent<UsersTableComponentProps> = props => {
    const { className, onDeleteUser, ...restProps } = props;

    // const dataSource = mock("users", 20);
    const { data: users } = useUsers();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    const [changeRole, { isLoading: changeRoleLoading }] = useChangeUserRole();
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
        setSearchText('');
    };
    const handleChangeRole = (role: RoleUnionType, userId: string) => {
        changeRole({ role, userId });
    };

    const columns: ColumnsType<Profile.Query.Result> = [
        {
            title: 'نام',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps(
                'name',
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),
        },
        {
            title: 'آدرس ایمیل',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSearchProps(
                'email',
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),
        } as any,
        {
            title: 'نقش',
            dataIndex: 'role',
            key: 'role',
            ...getColumnSearchProps(
                'role',
                handleReset,
                handleSearch,
                inputRef,
                searchedColumn,
                searchText
            ),
            render: (name, record, index) => (
                <Select
                    defaultValue={record.role}
                    style={{ width: 120 }}
                    size='middle'
                    options={[
                        { value: 'ADMIN', label: 'مدیر' },
                        { value: 'USER', label: 'کاربر' },
                    ]}
                    showSearch={false}
                    onChange={role => handleChangeRole(role, record._id)}
                    allowClear={false}
                />
            ),
        },
        {
            title: 'عملیات',
            dataIndex: '',
            key: 'x',
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
        case 'ADMIN':
            return 'مدیر';
        case 'AUTHOR':
            return 'نویسنده';
        case 'USER':
            return 'کاربر';
        default:
            return 'بدون نقش!';
    }
};
