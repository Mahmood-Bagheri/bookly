import { Image } from "./image";

declare namespace Publisher {
    declare namespace Query {
        type Result = {
            followers: [];
            description: string;
            _id: string;
            title: string;
            createdAt: string;
            updatedAt: string;
            image: Image;
            books: Book.Query.Result[];
        };
    }
}
