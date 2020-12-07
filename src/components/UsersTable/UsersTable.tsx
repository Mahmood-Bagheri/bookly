import React, { Fragment, FunctionComponent } from "react";
/* components */
import { Table } from "components/Table";
import { Button } from "components/Button";
import { PopConfirm } from "components/PopConfirm";
import { ColumnsType } from "antd/lib/table";
import { Link, RouterLinkProps } from "components/Link";
/* modules */
import clsx from "classnames";
/* helpers */
import { routeTo } from "helpers/routeTo";
import { uniqueId } from "helpers/uniqueId";
/* assets */
/* types */
import { UsersTableComponentProps } from "./UsersTable.types";
/* styles */

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
            render: (name, record) => {
                return (
                    <Link<RouterLinkProps>
                        permission="routes.user"
                        to={routeTo("publicUserProfile", {
                            userId: record.id || 0,
                        })}
                    >
                        {name}
                    </Link>
                );
            },
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
            render: (_, record) => (
                <Fragment>
                    <PopConfirm
                        title="برای حذف این کاربر مطمئن هستید ؟ "
                        onConfirm={() => onDeleteUser({ userId: record.id })}
                    >
                        <Button danger>حذف کاربر</Button>
                    </PopConfirm>
                </Fragment>
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
