import { ReactElement } from "react";
import { Permission } from "../permissions";
import { Path } from "types/global";

export type AclProps = {
    permission: Path<Permission>;
};

export type AclComponentProps = AclComponent;
