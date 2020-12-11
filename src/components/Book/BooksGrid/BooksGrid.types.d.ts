import { BaseBookBoxProps, BookBox } from "components/Book/BookBox";

export type BooksGridProps = {
    title?: string;
    loading?: boolean;
    books: BaseBookBoxProps[];
};
