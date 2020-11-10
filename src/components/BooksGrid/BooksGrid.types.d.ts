import { BaseBookBoxProps } from "components/BookBox";

export type BooksGridComponentProps = {
    title?: string;
    loading?: boolean;
    books?: BaseBookBoxProps[];
};
