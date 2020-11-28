import { ComponentType } from "react";
import { ROUTES } from "constants/routes";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import ErrorPage from "pages/Error";
import Book from "pages/Book";
import Publisher from "pages/Publisher";
import Publishers from "pages/Publishers";
import Profile from "pages/Profile";
import Users from "pages/Users";
import User from "pages/User";
import Categories from "pages/Categories";
import Category from "pages/Category";

type Router = {
    path: string;
    exact: boolean;
    component: ComponentType;
    props?: object;
    requireAuth: boolean;
};

export const routers: Router[] = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        requireAuth: true,
    },
    {
        path: ROUTES.login,
        component: Login,
        exact: true,
        requireAuth: false,
    },
    {
        path: ROUTES.register,
        component: Register,
        exact: true,
        requireAuth: false,
    },
    {
        path: ROUTES.book,
        component: Book,
        exact: true,
        requireAuth: false,
    },
    {
        path: ROUTES.publisher,
        component: Publisher,
        exact: true,
        requireAuth: false,
    },
    {
        path: ROUTES.publishers,
        component: Publishers,
        exact: true,
        requireAuth: false,
    },
    {
        path: ROUTES.profile,
        component: Profile,
        exact: true,
        requireAuth: true,
    },
    {
        path: ROUTES.users,
        component: Users,
        exact: true,
        requireAuth: true,
    },
    {
        path: ROUTES.user,
        component: User,
        exact: true,
        requireAuth: true,
    },
    {
        path: ROUTES.categories,
        component: Categories,
        exact: true,
        requireAuth: false,
    },
    {
        path: ROUTES.category,
        component: Category,
        exact: true,
        requireAuth: false,
    },
    {
        path: "*",
        component: ErrorPage,
        exact: true,
        requireAuth: false,
    },
];
