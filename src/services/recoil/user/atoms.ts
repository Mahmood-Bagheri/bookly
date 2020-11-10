import { atom } from "recoil";

type RoleUnionType = "guest" | "admin" | "user" | "author";

export const roleState = atom<RoleUnionType>({
    key: "roleState",
    default: "guest",
});
