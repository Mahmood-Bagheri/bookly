import { Image } from './image';
import { Profile } from './profile';

declare namespace Publisher {
    declare namespace Query {
        type Result = {
            followers: { _id: string; name: string }[];
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
