export type CategoryBoxProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof Category.Query.Result
> &
    Category.Query.Result;
