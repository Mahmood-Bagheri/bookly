import React, { FC } from "react";
/* components */
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
import { ReactComponent as EmptyGridPicture } from "assets/icons/empty.svg";
/* types */
import { EmptyGridProps } from "./EmptyGrid.types";
/* styles */
import s from "./EmptyGrid.module.scss";
import { Link, RouterLinkProps } from "components/Link";
import { routeTo } from "helpers/routeTo";

export const EmptyGrid: FC<EmptyGridProps> = ({
    className,
    query,
    ...restProps
}) => {
    return (
        <div className={clsx(s.box, className)}>
            <EmptyGridPicture />
            <Text className={clsx(s.title, "mt-3")}>
                متاسفیم! جست و جوی کلمه ی "{query}" نتیجه ای نداشت! 😁
            </Text>{" "}
            <Text className={clsx(s.description, "mt-2")}>
                برای بازگشت به خانه <Home /> {"  "}
                کلیک کنید
            </Text>
        </div>
    );
};
const Home = () => (
    <Link<RouterLinkProps>
        permission="routes.home"
        to={routeTo("home")}
        className={s.here}
    >
        اینجا
    </Link>
);
