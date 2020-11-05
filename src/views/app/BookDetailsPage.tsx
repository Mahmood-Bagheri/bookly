import React, { FunctionComponent } from "react";
import { BookDetailsBox } from "components/BookDetailsBox";
import { BookDescriptionText } from "components/BookDescriptionText";
import { CommentsGrid } from "components/CommentsGrid";
import { CommentInputBox } from "components/CommentInputBox";

const BookDetailsPage: FunctionComponent = props => {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-xl-4">
                    <BookDetailsBox />
                    <CommentInputBox />
                </div>
                <div className="col-xl-8 mt-3 mt-xl-0">
                    <BookDescriptionText />
                    <CommentsGrid />
                </div>
            </div>
        </div>
    );
};
export default BookDetailsPage;
