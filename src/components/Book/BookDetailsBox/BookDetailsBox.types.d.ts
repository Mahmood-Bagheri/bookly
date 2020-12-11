export type BookDetailsBoxComponentProps = Pick<
    Book.Base,
    "author" | "title" | "imageSrc"
> & { id: string };
