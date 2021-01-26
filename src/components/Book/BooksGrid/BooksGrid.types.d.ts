import { BaseBookBoxProps, BookBox } from 'components/Book';

export type BooksGridProps = {
    title?: string;
    loading?: boolean;
    books: Book.Query.Result[];
};
