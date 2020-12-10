import { BaseBookBoxProps, BookBox } from "components/BookBox";

export type BooksGridProps = {
    title?: string;
    loading?: boolean;
    books: BaseBookBoxProps[];
};
