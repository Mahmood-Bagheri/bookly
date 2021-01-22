import { AxiosResponse } from "axios";
import { RoleUnionType } from "components/UserBox";

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
        };
    }

    declare namespace Mutation {
        declare namespace Update {
            type Variables = Base;
            type Result = {};
        }
    }
}
