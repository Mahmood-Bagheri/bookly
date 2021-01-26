import { TableProps } from 'antd/lib/table';
import { HTMLProps } from 'react';

export type BookManagementTableTypes = {
    books: Book.Query.Result[];
};

export type BookManagementTableProps = HTMLProps<HTMLDivElement> &
    BookManagementTableTypes &
    TableProps<Book.Query.Result>;
