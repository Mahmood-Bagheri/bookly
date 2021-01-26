import { MenuItem } from 'components/MenuBarItem';
export type MenuBarProps = {
    menu: MenuItem[];
};

export type MenuBarComponentProps = React.HtmlHTMLAttributes<HTMLDivElement> &
    Partial<MenuBarProps>;
