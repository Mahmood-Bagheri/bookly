import React, { FunctionComponent } from "react";
import { CommentsGridComponentProps } from "./CommentsGrid.types";
import s from "./CommentsGrid.module.scss";
import { CommentBox } from "components/CommentBox";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    return (
        <div className={s.box}>
            <CommentBox />
            <CommentBox />
            <CommentBox />
            <CommentBox />
            <CommentBox />
        </div>
    );
};
