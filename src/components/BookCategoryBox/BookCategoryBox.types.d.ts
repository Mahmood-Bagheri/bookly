export type BookCategoryBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof Category.Base
> &
    Category.Base;
