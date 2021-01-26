import React, { FC } from 'react';
/* components */
import { Space, Table, Tag as AntDesignTag } from 'antd';
/* modules */
import clsx from 'classnames';
/* helpers */
/* assets */
/* types */
import { BookManagementTableProps } from './BookManagementTable.types';
/* styles */
import s from './BookManagementTable.module.scss';
import { PopConfirm } from 'components/PopConfirm';
import { useDeleteBook, useUpdateBook } from 'hooks';
import { TagProps } from 'antd/lib/tag';
import { map } from 'lodash/fp';

const columns = [
    {
        title: 'نویسنده',
        dataIndex: 'author',
        key: 'author',
        render: (author: string) => <span>{author}</span>,
    },
    {
        title: 'منتشر کننده',
        dataIndex: 'submittedBy',
        key: 'submittedBy',
    },
    {
        title: 'وضعیت',
        key: 'status',
        render: (_: any, comment: ReturnType<typeof mapBooks>) => (
            <Space size='middle'>
                <CustomTag bookId={comment._id} status={comment.status}>
                    منتظر شده
                </CustomTag>
            </Space>
        ),
    },
    {
        title: 'عملیات',
        key: 'action',
        render: (_: any, record: ReturnType<typeof mapBooks>) => (
            <DeleteBook bookId={record._id} />
        ),
    },
];

export const BookManagementTable: FC<BookManagementTableProps> = ({
    className,
    books,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, className)}>
            <p className={s.title}>مدیریت کتاب ها</p>
            <Table
                pagination={{ hideOnSinglePage: true }}
                columns={columns}
                dataSource={normalizeBooks(books)}
            />
        </div>
    );
};

const normalizeBooks = (comments: Book.Query.Result[]) =>
    map(mapBooks)(comments);

const mapBooks = (comment: Book.Query.Result) => ({
    author: comment.author.name,
    status: comment.isPublished,
    _id: comment._id,
    submittedBy: comment.submittedBy.name,
});

type Tag = TagProps & {
    status: boolean;
    bookId: string;
};

const CustomTag: FC<Tag> = ({ status, bookId, ...tagProps }) => {
    const [updateBook] = useUpdateBook();

    return (
        <AntDesignTag
            color={status ? 'green' : 'red'}
            onClick={() =>
                updateBook({ bookId, dto: { isPublished: !status } })
            }
            style={{ cursor: 'pointer' }}
            {...tagProps}
        >
            {status ? 'منتشر شده' : 'در انتظار تایید'}
        </AntDesignTag>
    );
};

type DeleteBookrops = {
    bookId: string;
};

const DeleteBook: FC<DeleteBookrops> = ({ bookId }) => {
    const [deleteBook] = useDeleteBook();
    return (
        <PopConfirm
            title='برای حذف این کتاب مطمئن هستید؟'
            onConfirm={() => deleteBook({ bookId })}
            okText='بله'
            cancelText='خیر'
        >
            <button>حذف کتاب</button>
        </PopConfirm>
    );
};
