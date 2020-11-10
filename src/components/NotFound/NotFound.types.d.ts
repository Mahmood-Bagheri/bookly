export type NotFoundGridProps = {
    title: string;
    icon: string;
};

export type NotFoundComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof NotFoundGridProps
> &
    Partial<NotFoundGridProps>;
