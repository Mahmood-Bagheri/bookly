import { HTMLProps } from "react";

export type AuthorBoxTypes = Omit<Author.Query.Result, "books">;

export type AuthorBoxProps =
    //  HTMLProps<HTMLDivElement> &
    AuthorBoxTypes;
