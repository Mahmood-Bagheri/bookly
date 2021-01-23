declare namespace Book {
    type Base = {
        initialLikeState: boolean;
        title: string;
        author: string;
        imageSrc?: string;
        id: string;
    };
    type Id = {
        bookId: string;
    };

    declare namespace Query {
        type Result = {
            _id: string;
            comments: Comment.Query.Result[];
            isPublished: boolean;
            description: string;
            title: string;
            releaseYear: number;
            category: {
                _id: string;
                title: string;
            };
            author: {
                _id: string;
                name: string;
            };
            submittedBy: {
                _id: string;
                name: string;
            };
            createdAt: string;
            updatedAt: string;
            image: {
                _id: string;
                fieldname: string;
                originalname: string;
                encoding: string;
                mimetype: string;
                destination: string;
                filename: string;
                path: string;
                size: number;
                createdAt: string;
                updatedAt: string;
            };
        };
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
