import { routeTo } from "helpers/routeTo";
import { MenuItem } from "components/MenuBarItem";

export const MENU: MenuItem[] = [
    {
        title: "ورود",
        link: routeTo("login"),
        permission: "login",
        exact: true,
    },
    {
        title: "ثبت نام",
        link: routeTo("register"),
        permission: "register",
    },
    {
        title: "دسته بندی ها",
        link: routeTo("categories"),
        permission: "category.read",
    },
    {
        title: "نویسندگان",
        link: routeTo("authors"),
        permission: "author.read",
    },
    {
        title: "ناشر ها",
        link: routeTo("publishers"),
        permission: "publisher.read",
    },
    {
        title: "کاربران",
        link: routeTo("users"),
        permission: "users.read",
        exact: true,
    },
    {
        title: "پروفایل",
        link: routeTo("profile"),
        permission: "profile.read",
    },
    {
        title: "ثبت کتاب",
        link: routeTo("submitBook"),
        permission: "books.submit",
    },
    {
        title: "خانه",
        link: routeTo("home"),
        permission: "home.read",
        exact: true,
    },
];
