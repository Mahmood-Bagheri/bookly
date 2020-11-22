import { ComponentType } from "react";
import { ROUTES } from "./routes";

import Home from "pages/Home";

type Router = {
    path: string;
    exact: boolean;
    component: ComponentType;
    props?: object;
};

export const routers: Router[] = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        props: {},
    },
    {
        path: "*",
        component: Home,
        exact: true,
        props: {},
    },
];
