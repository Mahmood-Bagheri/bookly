import { routeTo } from "helpers/routeTo";
import { MenuItem } from "components/MenuBarItem";

export const MENU: MenuItem[] = [
    { title: "ورود", link: routeTo("login"), permission: "routes.login" },
    {
        title: "ثبت نام",
        link: routeTo("register"),
        permission: "routes.register",
    },
    {
        title: "دسته بندی ها",
        link: routeTo("categories"),
        permission: "routes.categories",
        exact: false,
    },
    {
        title: "ناشر ها",
        link: routeTo("publishers"),
        permission: "routes.publishers",
        exact: false,
    },
    {
        title: "کاربران",
        link: routeTo("users"),
        permission: "routes.users",
        exact: false,
    },
    {
        title: "پروفایل",
        link: routeTo("profile"),
        permission: "routes.profile.main",
        exact: false,
    },
    {
        title: "خانه",
        link: routeTo("home"),
        permission: "routes.home",
        exact: true,
    },
];
