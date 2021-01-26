import { AxiosResponse } from 'axios';
import { RoleUnionType } from 'components/UserBox';
import { Image } from './image';

declare namespace Profile {
    type Base = {
        username: string;
        biography: string;
        likedBooks: Array<Book.Base>;
    };

    declare namespace Query {
        type Result = {
            _id: string;
            name: string;
            role: RoleUnionType;
            books: Book.Query.Result[];
            biography: string;
            createdAt: string;
            updatedAt: string;
            image: Image;
        };
    }

    declare namespace Mutation {
        declare namespace Update {
            type Variables = {
                image: File;
                name: string;
                biography: string;
            };
            type Result = {};
        }
    }
}
