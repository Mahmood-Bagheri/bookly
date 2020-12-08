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

export const EmptyGrid: FC<EmptyGridProps> = ({ className, ...restProps }) => {
    return (
        <div className={clsx(s.box, className)}>
            <EmptyGridPicture />
            <Text className={clsx(s.title, "mt-3")}>
                متاسفیم! جست و جو نتیجه ای نداشت 😟
            </Text>
        </div>
    );
};
