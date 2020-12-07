import { BaseBookBoxProps, BookBox } from "components/BookBox";

export type BooksGridComponentProps = {
    title?: string;
    loading?: boolean;
    books: BaseBookBoxProps[];
};
