import { AxiosResponse } from "axios";

declare namespace Book {
    type Base = {};

    declare namespace Query {
        type Result = Array<{
            id: string;
        }>;
    }

    declare namespace Mutation {
        declare namespace Like {
            type Variables = {
                bookId: string;
                likeState: boolean;
            };

            type Result = {};
        }

        declare namespace Create {
            type Variables = {};

            type Result = {};
        }

        declare namespace Update {
            type Variables = {};

            type REsult = {};
        }

        declare namespace Delete {
            type Variables = {
                bookId: string;
            };

            type Result = {
                Shit: string;
            };
        }
    }
}
