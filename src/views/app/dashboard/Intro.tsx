import React from "react";
import { BookBox } from "components/BookBox";

export default function App() {
    return (
        <div className="container mt-2">
            <div className="flex space-s-0 md:space-s-4 flex-wrap md:flex-no-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 mb-2">
                    <BookBox />
                </div>
            </div>
        </div>
    );
}
