import { ComponentType } from "react";
import { ROUTES } from "constants/routes";
/* modules */
import { Path } from "types/global";
import { Permission } from "services/rbac";

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
import SubmitBook from "pages/SubmitBook";
import Authors from "pages/Authors";
import Author from "pages/Author";
import CommentsManagement from "pages/CommentsManagement";
import CategoryManagement from "pages/CategoryManagement";
import BookManagement from "pages/BookManagement";

type Router = {
    path: string | string[];
    exact: boolean;
    component?: ComponentType;
    to?: string;
    config: {
        requireAuth: boolean;
        permissionKey: Path<Permission>;
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
            permissionKey: "home.read",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.login,
        component: Login,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "login",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.register,
        component: Register,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "register",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.book,
        component: Book,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "books.readSingle",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.publisher,
        component: Publisher,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "publisher.readSingle",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.publishers,
        component: Publishers,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "publisher.read",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.publicUserProfile,
        component: PublicUserProfile,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "profile.readPublicUserProfile",
            layout: { include: true, searchbar: false },
        },
    },

    {
        path: ROUTES.profile,
        component: Profile,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "profile.read",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.profileLikedBooks,
        component: ProfileLikledBooks,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "profile.read",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.userManagement,
        component: Users,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "users.read",
            layout: { include: true, searchbar: true },
        },
    },

    {
        path: ROUTES.categories,
        component: Categories,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "category.read",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.category,
        component: Category,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "category.readSingle",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: [ROUTES.submitBook, ROUTES.updateBook],
        component: SubmitBook,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "books.submit",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.author,
        component: Author,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "author.readSingle",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.authors,
        component: Authors,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "author.read",
            layout: { include: true, searchbar: true },
        },
    },
    {
        path: ROUTES.commentsManagement,
        component: CommentsManagement,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "management.comments",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.categoryManagement,
        component: CategoryManagement,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "management.category",
            layout: { include: true, searchbar: false },
        },
    },
    {
        path: ROUTES.bookManagement,
        component: BookManagement,
        exact: true,
        config: {
            requireAuth: true,
            permissionKey: "management.book",
            layout: { include: true, searchbar: false },
        },
    },

    {
        path: ROUTES.error,
        component: Error,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "home.read",
            layout: { include: false, searchbar: false },
        },
    },
    {
        path: "/",
        to: ROUTES.home,
        exact: true,
        config: {
            requireAuth: false,
            permissionKey: "home.read",
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
            permissionKey: "home.read",
            layout: { include: false, searchbar: false },
        },
    },
];
