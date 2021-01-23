import React, { FC } from "react";
/* components */
import { Link, RouterLinkProps } from "components/Link";
import { Text } from "components/Text";
/* modules */
import clsx from "classnames";
/* helpers */
import { routeTo } from "helpers/routeTo";
/* assets */
/* types */
import { AuthorBoxProps } from "./AuthorBox.types";
/* styles */
import s from "./AuthorBox.module.scss";

export const AuthorBox: FC<AuthorBoxProps> = ({ _id: authorId, name }) => {
    const className = "";

    return (
        <Link<RouterLinkProps>
            permission="author.readSingle"
            to={routeTo("author", { authorId })}
        >
            <div className={clsx(s.box, "shadow", className)}>
                <Text className={s.title}>{name}</Text>
            </div>
        </Link>
    );
};
