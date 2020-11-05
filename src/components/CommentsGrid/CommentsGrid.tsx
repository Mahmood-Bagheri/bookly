import React, { FunctionComponent } from "react";
import { CommentBox } from "components/CommentBox";
import { randomDate } from "helpers/randomDate";
import { CommentsGridComponentProps } from "./CommentsGrid.types";
import s from "./CommentsGrid.module.scss";

export const CommentsGrid: FunctionComponent<CommentsGridComponentProps> = props => {
    return (
        <div className={s.box}>
            <CommentBox
                username="شهرزاد"
                date={randomDate(new Date("2020/1/1"))}
                body=" سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده."
            />
            <CommentBox
                username="شهرزاد"
                date={randomDate(new Date("2020/1/1"))}
                body=" سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده."
            />
            <CommentBox
                username="شهرزاد"
                date={randomDate(new Date("2020/1/1"))}
                body=" سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده."
            />
            <CommentBox
                username="شهرزاد"
                date={randomDate(new Date("2020/1/1"))}
                body=" سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده."
            />
            <CommentBox
                username="شهرزاد"
                date={randomDate(new Date("2020/1/1"))}
                body=" سلام من قبلا این کتاب رو خریدم و به یکی دیگه هم هدیه دادم و
                انقدر خوب بود به دوستام هدیه دادمش بازم میخوام بخرم ممنون از
                نویسنده."
            />
        </div>
    );
};
