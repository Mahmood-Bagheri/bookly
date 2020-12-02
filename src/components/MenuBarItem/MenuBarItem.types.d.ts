export type MenuItem = {
    title: string;
    link: string;
    permission: string;
};

export type MenuBarItemComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof MenuItem
> &
    MenuItem;
