import React, { FC, useState } from "react";
/* components */
import { Popconfirm, Space, Table, Tag as AntDesignTag } from "antd";
/* modules */
import clsx from "classnames";
import { map } from "lodash/fp";
import { TagProps } from "antd/lib/tag";
import { useDeleteComment, useUpdateComment } from "hooks";
/* helpers */
/* assets */
/* types */
import { CommentManagementTableProps } from "./CommentManagementTable.types";
/* styles */
import s from "./CommentManagementTable.module.scss";

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
        render: (_: any, comment: ReturnType<typeof mapComment>) => (
            <Space size="middle">
                <CustomTag commentId={comment._id} status={comment.status}>
                    منتظر شده
                </CustomTag>
            </Space>
        ),
    },
    {
        title: "عملیات",
        key: "action",
        render: (_: any, record: ReturnType<typeof mapComment>) => (
            <DeleteComment commentId={record._id} />
        ),
    },
];

export const CommentManagementTable: FC<CommentManagementTableProps> = ({
    className,
    comments,
}) => {
    return (
        <div className={clsx(s.box, className)}>
            <p className={s.title}>مدیریت نظرات کاربران</p>
            <Table
                pagination={{ hideOnSinglePage: true }}
                columns={columns}
                dataSource={normalizeComments(comments)}
            />
        </div>
    );
};

const normalizeComments = (comments: Comment.Query.Result[]) =>
    map(mapComment)(comments);

const mapComment = (comment: Comment.Query.Result) => ({
    author: comment.author.name,
    body: comment.body,
    status: comment.isPublished,
    _id: comment._id,
});

type Tag = TagProps & {
    status: boolean;
    commentId: string;
};

const CustomTag: FC<Tag> = ({ status, commentId, ...tagProps }) => {
    const [updateComment] = useUpdateComment();

    return (
        <AntDesignTag
            color={status ? "green" : "red"}
            onClick={() =>
                updateComment({ commentId, data: { isPublished: !status } })
            }
            style={{ cursor: "pointer" }}
            {...tagProps}
        >
            {status ? "منتشر شده" : "در انتظار تایید"}
        </AntDesignTag>
    );
};

type DeleteCommentProps = {
    commentId: string;
};

const DeleteComment: FC<DeleteCommentProps> = ({ commentId }) => {
    const [deleteComment] = useDeleteComment();
    return (
        <Popconfirm
            title="برای حذف این نظر مطمئن هستید؟"
            onConfirm={() => deleteComment(commentId)}
            okText="بله"
            cancelText="خیر"
        >
            <button>حذف نظر</button>
        </Popconfirm>
    );
};
