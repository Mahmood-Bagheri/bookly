import React, { Fragment, FunctionComponent } from "react";
/* components */
import { Table } from "components/Table";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { UsersTableComponentProps } from "./UsersTable.types";
/* styles */
import s from "./UsersTable.module.scss";
import { Button } from "components/Button";
import { PopConfirm } from "components/PopConfirm";
import { ColumnsType } from "antd/lib/table";

type DataSourceType = {
    id: string;
    name: string;
    username: string;
    emailAddress: string;
};
const dataSource: DataSourceType[] = [
    {
        id: "1",
        name: "محمود",
        username: "Mahmood",
        emailAddress: "محمود دات باقری ات ساین جیمیل دات کام",
    },
    {
        id: "2",
        name: "مایک",
        username: "Mike",
        emailAddress: "مایک اسکل زاده ات ساین اوت لوک دات کام",
    },
];

export const UsersTable: FunctionComponent<UsersTableComponentProps> = props => {
    const { className, onDeleteUser, ...restProps } = props;

    const columns: ColumnsType<DataSourceType> = [
        {
            title: "نام",
            dataIndex: "name",
            key: "name",
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
            render: (row: DataSourceType) => (
                <Fragment>
                    <Button className="ml-2" type="primary">
                        نمایش اطلاعات بیشتر!
                    </Button>
                    <PopConfirm
                        title="برای حذف این کاربر مطمئن هستید ؟ "
                        onConfirm={() => onDeleteUser({ userId: row.id })}
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
