import { BaseBookBoxProps, BookBox } from "components/BookBox";

export type BooksGridComponentProps = {
    title?: string;
    loading?: Props<typeof BookBox>["likeLoading"];
    books: BaseBookBoxProps[];
};
