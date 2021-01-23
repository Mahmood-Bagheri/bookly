import { atom } from "recoil";
import * as LocalStorage from "helpers/localStorage";

export type RoleUnionType = "guest" | "ADMIN" | "USER" | "AUTHOR";

type User = {
    role: RoleUnionType;
    token?: string;
    userId: string;
};

export const userState = atom<User>({
    key: "user",
    default: {
        role: (LocalStorage.getItem("role") as RoleUnionType) || "guest",
        token: LocalStorage.getItem("token") || "",
        userId: LocalStorage.getItem("userId") || "",
    },
});
