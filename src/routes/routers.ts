import { ComponentType } from "react";
import { ROUTES } from "./routes";

import Home from "pages/Home";
import Login from "pages/Login";
import Register from "pages/Register";
import ErrorPage from "pages/Error";

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
        requireAuth: true,
    },
    {
        path: ROUTES.register,
        component: Register,
        exact: true,
        requireAuth: true,
    },
    {
        path: "*",
        component: ErrorPage,
        exact: true,
        requireAuth: false,
    },
];
