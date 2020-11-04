import React from "react";
import { BookBox } from "components/BookBox";
import { CommentBox } from "components/CommentBox";

export default function App() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <CommentBox />
                </div>
            </div>
        </div>
    );
}
