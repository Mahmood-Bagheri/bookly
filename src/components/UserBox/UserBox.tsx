import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
import { Image } from "components/Image";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { UserBoxProps, RoleUnionType } from "./UserBox.types";
/* styles */
import s from "./UserBox.module.scss";
import { CollapsibleText } from "components/CollapsibleText";

export const UserBox: FC<UserBoxProps> = ({
    className,
    name,
    role,
    biography,
    profileImage: imageSrc,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, `shadow p-4`, className)} {...restProps}>
            <div className="d-flex align-items-center">
                <Image className={s.profileImage} src={imageSrc} />
                <div className={s.nameRoleWrap}>
                    <Text className={s.name}>{name}</Text>
                    <Text className={s.role}>{transformRole(role)}</Text>
                </div>
            </div>
            <Text className={s.biographyTitle}>بیوگرافی کاربر</Text>
            <Text className={clsx(s.biography, { [s.collapsed]: true })}>
                {biography}
            </Text>
        </div>
    );
};

// todo -> checkout how we can make bettter (generalize) this part
const transformRole = (role: RoleUnionType) => {
    switch (role) {
        case "admin":
            return "مدیر";
        case "author":
            return "نویسنده";
        case "guest":
            return "میهمان";
        case "user":
            return "کاربر";
        default:
            return "بدون نقش!";
    }
};
