import React, { FC } from "react";
/* components */
import { Drawer } from "components/Drawer";
/* modules */
import clsx from "classnames";
import { useMediaQuery } from "hooks/useMediaQuery";
/* helpers */
/* assets */
import { ReactComponent as SettingsIcon } from "assets/icons/settings.svg";
/* types */
import { UserLayoutComponentProps } from "./UserLayout.types";
/* styles */
import s from "./UserLayout.module.scss";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";
import { Link, RouterLinkProps } from "components/Link";
import { routeTo } from "helpers/routeTo";
import { MENU } from "constants/topbar";

export const UserLayout: FC<UserLayoutComponentProps> = props => {
    const { className, ...restProps } = props;
    const isMobile = useMediaQuery("(max-width: 992px)");
    // const isMobile = true;

    if (isMobile) {
        return (
            <Drawer visible={true} closable={false}>
                <Content {...restProps} />
            </Drawer>
        );
    }
    return <Content {...props} />;
};

export const Content = (props: UserLayoutComponentProps) => {
    return (
        <div className={clsx(s.box, ``, props.className)}>
            <div className="d-flex align-items-center p-3">
                <Image
                    className={s.profileImage}
                    src={generateFakeImageUrl()}
                />
                <div className="mr-2">
                    <Text className={s.name}>محمود باقری</Text>
                    <Text className={s.role}>مدیر</Text>
                </div>
            </div>
            <div className="menu mt-4">
                {MENU.map(item => {
                    return (
                        <Link<RouterLinkProps>
                            permission="category.read"
                            to={item.link}
                            className={s.menuItem}
                            activeClassName={s.activeMenuItem}
                        >
                            <SettingsIcon className={s.menuItemIcon} />
                            <Text className={s.menuItemText}>{item.title}</Text>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};
