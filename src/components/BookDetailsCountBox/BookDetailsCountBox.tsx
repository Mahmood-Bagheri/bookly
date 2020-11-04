import React, { Fragment, FunctionComponent } from "react";
import { BookDetailsCountBoxComponentProps } from "./BookDetailsCountBox.types";
import s from "./BookDetailsCountBox.module.scss";

export const BookDetailsCountBox: FunctionComponent<BookDetailsCountBoxComponentProps> = props => {
    const { type, count, description, ...restProps } = props;

    const renderSvgContent = () => {
        if (type === "like") {
            return (
                <Fragment>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </Fragment>
            );
        }
        return (
            <Fragment>
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
            </Fragment>
        );
    };

    return (
        <div className={s.box} {...restProps}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={s.icon}
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                {renderSvgContent()}
            </svg>
            <div>
                <div className={s.count}>{count}</div>
                <p className={s.description}>{description}</p>
            </div>
        </div>
    );
};
