import React from "react";
import { BookDetailsBox } from "components/BookDetailsBox";

export default function App() {
    return (
        <div className="container ">
            <div className="row">
                <div className="col-6 col-xl-4">
                    <BookDetailsBox />
                </div>
            </div>
        </div>
    );
}
