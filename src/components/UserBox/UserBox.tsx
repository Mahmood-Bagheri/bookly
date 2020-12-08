import React, { FC, useState } from "react";
/* components */
import { Text } from "components/Text";
import { Image } from "components/Image";
/* modules */
import clsx from "classnames";
import dayJs from "dayjs";
/* helpers */
/* assets */
import { ReactComponent as ArrowLeft } from "assets/icons/arrow-left.svg";
/* types */
import { UserBoxProps, RoleUnionType } from "./UserBox.types";
/* styles */
import s from "./UserBox.module.scss";
import { conditionalText } from "helpers/conditionalText";
import { UserBoxShimmer } from "./UserBoxShimmer";

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
    const [biographyExpanded, setBiographyExpanded] = useState(false);
    const toggleExpantion = () =>
        setBiographyExpanded(previousValue => !previousValue);

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
                {conditionalText(
                    biographyExpanded,
                    "نمایش کمتر",
                    "نمایش بیشتر"
                )}
                <ArrowLeft />
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
