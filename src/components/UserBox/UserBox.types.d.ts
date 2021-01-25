import { HTMLProps } from "react";
import { RoleUnionType } from "services/recoil/user/atoms";
import { Image } from "types/image";
import { Profile } from "types/profile";

export type UserBoxTypes = Omit<Profile.Query.Result, "books"> & {};

export type UserBoxProps = HTMLProps<HTMLDivElement> & UserBoxTypes;
export type { RoleUnionType };
