import { atom } from "recoil";

export type RoleUnionType = "guest" | "admin" | "user" | "author";

export const roleState = atom<RoleUnionType>({
    key: "roleState",
    default: "guest",
});
