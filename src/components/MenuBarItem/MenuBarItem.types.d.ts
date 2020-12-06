export type MenuItem = {
    title: string;
    link: string;
    permission: string;
    exact?: boolean;
};

export type MenuBarItemComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof MenuItem
> &
    MenuItem;
