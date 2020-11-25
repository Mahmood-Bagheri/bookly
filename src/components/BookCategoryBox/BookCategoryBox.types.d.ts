export type Category = {
    id: string;
    categoryTitle: string;
};

export type BookCategoryBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof Category
> &
    Category;
