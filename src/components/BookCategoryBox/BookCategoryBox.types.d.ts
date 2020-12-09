export type BookCategoryBoxProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof Category.Base
> &
    Category.Base;
