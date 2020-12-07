declare namespace Book {
    type Base = {
        initialLikeState: boolean;
        title: string;
        author: string;
        imageSrc?: string;
        id: string;
    };

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

        declare namespace Submit {
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
