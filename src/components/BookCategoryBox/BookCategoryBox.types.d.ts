export type BookCategoryBoxProps = {
    id: string;
    categoryTitle: string;
};

export type BookCategoryBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof BookCategoryBoxProps
> &
    BookCategoryBoxProps;
