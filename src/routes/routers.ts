import { ComponentType } from "react";
import { ROUTES } from "constants/routes";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import Book from "pages/Book";
import Publisher from "pages/Publisher";
import Publishers from "pages/Publishers";
import Profile from "pages/Profile";
import Users from "pages/Users";
import User from "pages/User";
import Categories from "pages/Categories";
import Category from "pages/Category";
import Error from "pages/Error";

type Router = {
    path: string;
    exact: boolean;
    component: ComponentType;
    props?: object;
    requireAuth: boolean;
    permissionKey: string;
    to?: string;
    withLayout?: boolean;
};

export const routers: Router[] = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        requireAuth: true,
        permissionKey: "routes.home",
    },
    {
        path: ROUTES.login,
        component: Login,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.login",
    },
    {
        path: ROUTES.register,
        component: Register,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.register",
    },
    {
        path: ROUTES.book,
        component: Book,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.book",
    },
    {
        path: ROUTES.publisher,
        component: Publisher,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.publisher",
    },
    {
        path: ROUTES.publishers,
        component: Publishers,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.publishers",
    },
    {
        path: ROUTES.profile,
        component: Profile,
        exact: true,
        requireAuth: true,
        permissionKey: "routes.profile",
    },
    {
        path: ROUTES.users,
        component: Users,
        exact: true,
        requireAuth: true,
        permissionKey: "routes.users",
    },
    {
        path: ROUTES.user,
        component: User,
        exact: true,
        requireAuth: true,
        permissionKey: "routes.user",
    },
    {
        path: ROUTES.categories,
        component: Categories,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.categories",
    },
    {
        path: ROUTES.category,
        component: Category,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.category",
    },
    {
        path: ROUTES.error,
        component: Error,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.category",
        withLayout: false,
    },
    {
        path: "*",
        component: Error,
        exact: true,
        requireAuth: false,
        permissionKey: "routes.error",
        to: ROUTES.error,
    },
];
