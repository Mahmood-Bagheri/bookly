import React, { FC } from "react";
/* components */
import { Tooltip } from "antd";
/* modules */
import clsx from "classnames";
import { useRecoilState } from "recoil";
import { userState } from "services/recoil/user/atoms";
/* helpers */
import * as notice from "helpers/notice";
import * as localStorage from "helpers/localStorage";

/* assets */
import { ReactComponent as LogoutIcon } from "assets/icons/logout.svg";
/* types */
import { LogoutButtonProps } from "./LogoutButton.types";
/* styles */
import s from "./LogoutButton.module.scss";
import { PopConfirm } from "components/PopConfirm";

export const LogoutButton: FC<LogoutButtonProps> = ({
    className,
    ...restProps
}) => {
    /* TODO make a good logout button  */
    const [user, updateUser] = useRecoilState(userState);

    const handleLogout = () => {
        updateUser({ role: "guest", token: "", userId: "" });
        localStorage.setItem("token", "");
        localStorage.setItem("role", "guest");
        notice.info("با موفقیت خارج شدید :)");
    };

    if (user.role !== "guest") {
        return (
            <div className={clsx(s.box, className)} title="خروج">
                <PopConfirm
                    title="آیا برای خروج مطمئن هستید ؟ "
                    placement="bottomRight"
                    onConfirm={handleLogout}
                >
                    <LogoutIcon />
                </PopConfirm>
            </div>
        );
    }
    return <span></span>;
};
