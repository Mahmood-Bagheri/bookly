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

    declare namespace Query {
        type Result = {
            _id: string;
            body: string;
            author: {
                _id: string;
                name: string;
            };
            createdAt: string;
            updatedAt: string;
        };
    }

    type PostRequest = {};
    type PutRequest = {};
    type PutResponse = {};
    type CreateVariables = {};
}
