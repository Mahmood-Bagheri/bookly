import { atom } from "recoil";

export type RoleUnionType = "guest" | "ADMIN" | "USER" | "AUTHOR";

export const roleState = atom<RoleUnionType>({
    key: "roleState",
    default: "guest",
});

export const userState = atom({
    key: "user",
    default: {},
});
