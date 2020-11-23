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
import { message } from "antd";

const dataSource = [
    {
        key: "1",
        name: "محمود",
        username: "Mahmood",
        emailAddress: "محمود دات باقری ات ساین جیمیل دات کام",
    },
    {
        key: "2",
        name: "مایک",
        username: "Mike",
        emailAddress: "مایک اسکل زاده ات ساین اوت لوک دات کام",
    },
];

const columns = [
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
        render: () => (
            <Fragment>
                <Button className="ml-2" type="primary">
                    نمایش اطلاعات بیشتر!
                </Button>
                <PopConfirm
                    title="برای حذف این کاربر مطمئن هستید ؟ "
                    onConfirm={() => message.success("کاربر با موفقیت حذف شد")}
                    onCancel={() => message.error("کاربر حذف نشد!")}
                >
                    <Button danger>حذف کاربر</Button>
                </PopConfirm>
            </Fragment>
        ),
    },
];

export const UsersTable: FunctionComponent<UsersTableComponentProps> = props => {
    const { className, ...restProps } = props;
    return (
        <Table
            {...restProps}
            pagination={{ hideOnSinglePage: true }}
            dataSource={dataSource}
            columns={columns}
        />
    );
};
