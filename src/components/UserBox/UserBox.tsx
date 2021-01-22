import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
import { Image } from "components/Image";
import { UserBoxShimmer } from "./UserBoxShimmer";
/* modules */
import clsx from "classnames";
import dayJs from "dayjs";
import { useToggle } from "hooks/useToggle";
/* helpers */
/* assets */
import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
/* types */
import { UserBoxProps, RoleUnionType } from "./UserBox.types";
/* styles */
import s from "./UserBox.module.scss";

export const UserBox: FC<UserBoxProps> = ({
    className,
    name,
    role,
    biography,
    profileImage: imageSrc,
    loading = false,
    registerDate,
    ...restProps
}) => {
    const [biographyExpanded, toggleExpantion] = useToggle(false);

    if (loading) {
        return <UserBoxShimmer />;
    }
    const registerationDate = dayJs().from(registerDate, true);

    return (
        <div
            className={clsx(s.box, `shadow p-4 mb-4`, className)}
            {...restProps}
        >
            <div className="d-flex align-items-center">
                <Image className={s.profileImage} src={imageSrc} />
                <div className={s.nameRoleWrap}>
                    <Text className={s.name}>{name}</Text>
                    <Text className={s.role}>{transformRole(role)}</Text>
                </div>
                <div className={s.registerDate}>
                    عضو از {registerationDate} پیش
                </div>
            </div>
            <Text className={s.biographyTitle}>بیوگرافی کاربر</Text>
            <Text
                className={clsx(s.biography, {
                    [s.collapsed]: !biographyExpanded,
                })}
            >
                {biography}
            </Text>
            <Text
                className={clsx(s.showMore, {
                    [s.showMoreNormalPosition]: biographyExpanded,
                })}
                onClick={toggleExpantion}
            >
                {biographyExpanded ? "نمایش کمتر" : "نمایش بیشتر"}
                <ArrowLeft />
            </Text>
        </div>
    );
};

// todo -> checkout how we can make bettter (generalize) this part

const transformRole = (role: RoleUnionType) => {
    switch (role) {
        case "ADMIN":
            return "مدیر";
        case "AUTHOR":
            return "نویسنده";
        case "USER":
            return "کاربر";
        default:
            return "بدون نقش!";
    }
};
