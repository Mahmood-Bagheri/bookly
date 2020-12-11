import React from "react";
/* components */
import { DescriptionBoxShimmer } from "./DescriptionBoxShimmer";
/* modules */
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { CommonProps } from "./DescriptionBox.types";
/* styles */
import s from "./DescriptionBox.module.scss";

type WithLoadingProps = CommonProps & {
    loading?: true;
};

type WithoutLoadingProps = CommonProps & {
    loading?: false;
    title: string;
    description: string;
};

type Props = CommonProps & {
    loading?: boolean;
    title?: string;
    description?: string;
};
/* overloading */
export function DescriptionBox(props: WithLoadingProps): JSX.Element;
export function DescriptionBox(props: WithoutLoadingProps): JSX.Element;
export function DescriptionBox(props: Props): JSX.Element {
    if (props.loading) {
        return <DescriptionBoxShimmer />;
    }
    return (
        <div className={clsx(s.box, `shadow`, props.className)}>
            <p className={s.title}>{props.title}</p>
            <p className={s.body}>{props.description}</p>
        </div>
    );
}
