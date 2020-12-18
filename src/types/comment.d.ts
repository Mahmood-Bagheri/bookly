declare namespace Comment {
    type Base = {
        id: string;
        username: string;
        body: string;
        date: Date;
    };

    declare namespace Create {
        type Variables = {
            bookId: string;
            comment: string;
        };
    }
    type GetRequest = Base & {};
    type PostRequest = {};
    type PutRequest = {};
    type PutResponse = {};
    type CreateVariables = {};
}
