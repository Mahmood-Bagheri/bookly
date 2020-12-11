export type CategoryBoxProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof Category.Base
> &
    Category.Base;
