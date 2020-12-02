declare namespace Comment {
    type Base = {
        id: string;
        username: string;
        body: string;
        date: Date;
    };

    type GetRequest = Base & {};
    type PostRequest = {};
    type PutRequest = {};
    type PutResponse = {};
    type CreateVariables = {};
}
