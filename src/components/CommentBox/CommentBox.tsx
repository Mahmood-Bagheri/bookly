import React, { FunctionComponent } from "react";
/* components */
import { DeleteButton } from "components/DeleteButton";
/* modules */
import dayJs from "dayjs";
import { rbacRender } from "services/rbac/conditionalRender";

/* assets */
import Image from "assets/images/book.jpg";
/* types */
import { CommentBoxComponentProps } from "./CommentBox.types";
/* styles */
import s from "./CommentBox.module.scss";
import { usePermissions } from "services/rbac/usePermissions";
import { useRecoilState } from "recoil";
import { roleState } from "services/recoil/user/atoms";
import { get } from "lodash";

export const CommentBox: FunctionComponent<CommentBoxComponentProps> = props => {
    const {
        id: commentId,
        body,
        date,
        username,
        onDelete = defaultOnDelete,
    } = props;

    const relativeFakeTime = dayJs().from(date, true);

    const [role] = useRecoilState(roleState);
    const { permissions } = usePermissions();

    return (
        <div className={s.box}>
            <img className={s.profileImage} src={Image} />

            <div className={s.header}>
                <div className={s.description}>
                    {username}
                    {"  "}
                    {relativeFakeTime} پیش گفته
                </div>

                {rbacRender(
                    <DeleteButton onClick={() => onDelete(commentId)} />,
                    get(permissions, `${role}.comments.delete`)
                )}
            </div>

            <p className={s.body}>{body}</p>
        </div>
    );
};

const defaultOnDelete = () => {};
