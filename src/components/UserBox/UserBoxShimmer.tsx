import React from "react";
import clsx from "classnames";
import s from "./UserBoxShimmer.module.scss";

export const UserBoxShimmer = () => {
    return (
        <div className={clsx(s.box, `shadow p-4`)}>
            <div className="d-flex align-items-center">
                <div className={s.profileImage} />
                <div className={s.nameRoleWrap}>
                    <div className={s.name}></div>
                    <div className={s.role}></div>
                </div>
            </div>
            <div className={s.biographyTitle}></div>
            <div className={clsx(s.biography)}></div>
            <div className={s.showMore}></div>
        </div>
    );
};
