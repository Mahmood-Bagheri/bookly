import React, { FC } from "react";
/* components */
import { Space, Table, Tag } from "antd";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { CommentManagementTableProps } from "./CommentManagementTable.types";
/* styles */
import s from "./CommentManagementTable.module.scss";
import { map } from "lodash/fp";

const columns = [
    {
        title: "نویسنده",
        dataIndex: "author",
        key: "author",
        render: (author: string) => <span>{author}</span>,
    },
    {
        title: "متن نظر",
        dataIndex: "body",
        key: "body",
    },
    {
        title: "وضعیت",
        key: "status",
        render: (_: any, record: ReturnType<typeof mapComment>) => (
            <Space size="middle">
                {record.status ? (
                    <Tag color="green">منتظر شده</Tag>
                ) : (
                    <Tag color="red">منتشر نشده</Tag>
                )}
            </Space>
        ),
    },
    {
        title: "عملیات",
        key: "action",
        render: (_: any, record: any) => (
            <Space size="middle">
                <a>حذف نظر</a>
            </Space>
        ),
    },
];

export const CommentManagementTable: FC<CommentManagementTableProps> = ({
    className,
    comments,
}) => {
    return (
        <div className={clsx(s.box, className)}>
            <Table columns={columns} dataSource={normalizeComments(comments)} />
        </div>
    );
};

const normalizeComments = (comments: Comment.Query.Result[]) =>
    map(mapComment)(comments);

const mapComment = (comment: Comment.Query.Result) => ({
    author: comment.author.name,
    body: comment.body,
    status: comment.isPublished,
});
