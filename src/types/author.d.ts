declare namespace Author {
    type Base = {};

    declare namespace Query {
        type Result = {
            _id: string;
            name: string;
            books: Book.Query.Result[];
        };
    }
}
