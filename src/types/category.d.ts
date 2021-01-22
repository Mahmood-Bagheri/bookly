declare namespace Category {
    type Base = {
        id: string;
        categoryTitle: string;
    };

    declare namespace Query {
        type Result = {
            _id: string;
            title: string;
            books: Book.Query.Result[];
        };
    }
}
