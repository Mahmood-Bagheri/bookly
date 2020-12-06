import { AxiosResponse } from "axios";

declare namespace Profile {
    type Base = {
        username: string;
        biography: string;
        likedBooks: Array<Book.Base>;
    };

    declare namespace Query {
        type Result = AxiosResponse<{ id: string }>;
    }

    declare namespace Mutation {
        declare namespace Update {
            type Variables = Base;
            type REsult = {};
        }
    }
}
