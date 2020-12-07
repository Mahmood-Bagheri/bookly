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
import ProfileLikledBooks from "pages/UserProfileLikedBooks";
import PublicUserProfile from "pages/PublicUserProfile";

type Router = {
    path: string;
    exact: boolean;
    component?: ComponentType;
    to?: string;
    config: {
        requireAuth: boolean;
        permissionKey: string;
        props?: object;
        layout: {
            include: boolean;
            searchbar: boolean;
        };
    };
};

export const routers: Router[] = [
    {
        path: ROUTES.home,
        component: Home,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.home",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.login,
        component: Login,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.login",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.register,
        component: Register,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.register",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.book,
        component: Book,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.book",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.publisher,
        component: Publisher,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.publisher",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.publishers,
        component: Publishers,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.publishers",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.publicUserProfile,
        component: PublicUserProfile,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "routes.profile.publicUser",
            layout: { include: true, searchbar: false },
        },
    },

    {
        path: ROUTES.profile,
        component: Profile,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "routes.profile.main",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.profileLikedBooks,
        component: ProfileLikledBooks,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "routes.profile.likedBooks",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.users,
        component: Users,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "routes.users",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.user,
        component: User,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "routes.user",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.categories,
        component: Categories,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.categories",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.category,
        component: Category,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.category",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.error,
        component: Error,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.error",
            layout: { include: false, searchbar: false },
        },
    },
    {
        path: "/",
        to: ROUTES.home,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "routes.home",
            layout: { include: false, searchbar: false },
        },
    },
    {
        path: "*",
        component: Error,
        exact: true,
        to: ROUTES.error,
        config: {
            requireAuth: false,
            permissionKey: "routes.error",
            layout: { include: false, searchbar: false },
        },
    },
];
