import { HTMLProps } from "react";

export type BookCategoriesGridProps = {
    loading?: boolean;
};

export type BookCategoriesGridComponentProps = HTMLProps<HTMLDivElement> &
    BookCategoriesGridProps;
