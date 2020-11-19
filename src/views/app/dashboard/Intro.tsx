import React from "react";
import Home from "pages/Home/Home";
import Book from "pages/Book/Book";
import { PublishersGrid } from "components/PublishersGrid";
import { BookCategoriesGrid } from "components/BookCategoriesGrid";
import { TopBar } from "components/TopBar";
import { LoginForm } from "components/LoginForm";
import { RegisterForm } from "components/RegisterForm";

export default function App() {
    return (
        <div>
            <TopBar title="دسته بندی کتاب ها" />
            <PublishersGrid />
            <Home />
            <BookCategoriesGrid />
            <Book />
            <LoginForm onSubmit={() => {}} />
            <RegisterForm onSubmit={() => {}} />
        </div>
    );
}
