import { Permission } from "services/rbac";
import { Path } from "types/global";

export type MenuItem = {
    title: string;
    link: string;
    permission: Path<Permission>;
    exact?: boolean;
};

export type MenuBarItemComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof MenuItem
> &
    MenuItem;
