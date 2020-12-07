import { routeTo } from "helpers/routeTo";
import { MenuItem } from "components/MenuBarItem";

export const MENU: MenuItem[] = [
    {
        title: "ورود",
        link: routeTo("login"),
        permission: "routes.login",
        exact: true,
    },
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
        exact: true,
    },
    {
        title: "پروفایل",
        link: routeTo("profile"),
        permission: "routes.profile.main",
    },
    {
        title: "ثبت کتاب",
        link: routeTo("submitBook"),
        permission: "routes.submitBook",
    },
    {
        title: "خانه",
        link: routeTo("home"),
        permission: "routes.home",
        exact: true,
    },
];
