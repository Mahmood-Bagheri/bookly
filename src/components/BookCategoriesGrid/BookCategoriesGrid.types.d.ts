import { HTMLProps } from "react";

export type BookCategoriesGridProps = {
    loading?: boolean;
    categories: Category.Base[];
};

export type BookCategoriesGridComponentProps = HTMLProps<HTMLDivElement> &
    BookCategoriesGridProps;
