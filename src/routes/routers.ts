import { ComponentType } from "react";
import { ROUTES } from "./routes";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import ErrorPage from "pages/Error";
import Book from "pages/Book";

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
        path: "*",
        component: ErrorPage,
        exact: true,
        requireAuth: false,
    },
];
