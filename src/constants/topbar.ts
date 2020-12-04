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
    },
    {
        title: "ناشر ها",
        link: routeTo("publishers"),
        permission: "routes.publishers",
    },
    {
        title: "کاربران",
        link: routeTo("users"),
        permission: "routes.users",
    },
    {
        title: "خانه",
        link: routeTo("home"),
        permission: "routes.home",
    },
];
