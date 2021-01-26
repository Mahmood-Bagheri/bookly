import { Image } from './image';

declare namespace Comment {
    type Base = {
        id: string;
        username: string;
        body: string;
        date: Date;
    };

    declare namespace Create {
        type Variables = {
            book: string;
            body: string;
        };
    }

    declare namespace Query {
        type Result = {
            _id: string;
            body: string;
            author: {
                _id: string;
                name: string;
                role: string;
                image: Image;
            };
            createdAt: string;
            updatedAt: string;
            isPublished: boolean;
        };
    }

    type PostRequest = {};
    type PutRequest = {};
    type PutResponse = {};
    type CreateVariables = {};
}
