import { HTMLProps } from "react";

export type CategoriesGridProps = {
    loading?: boolean;
    categories: Category.Query.Result[];
};
