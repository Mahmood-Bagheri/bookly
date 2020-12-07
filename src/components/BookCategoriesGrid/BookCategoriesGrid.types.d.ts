import { HTMLProps } from "react";
import { Category } from "components/BookCategoryBox";

export type BookCategoriesGridProps = {
    loading?: boolean;
    categories: Category[];
};

export type BookCategoriesGridComponentProps = HTMLProps<HTMLDivElement> &
    BookCategoriesGridProps;
