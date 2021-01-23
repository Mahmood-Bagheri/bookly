import { HTMLProps } from "react";

export type AuthorsGridTypes = {
    authors: Author.Query.Result[];
};

export type AuthorsGridProps = HTMLProps<HTMLDivElement> & AuthorsGridTypes;
