export const permissions = {
    guest: {
        books: {
            read: true,
            create: false,
            update: false,
            delete: false,
            like: false,
        },
        comments: {
            read: true,
            create: false,
            update: false,
            delete: true,
        },
        bookComments: {},
        profile: {
            read: false,
            update: false,
            image: false,
            name: false,
            biography: false,
            username: {
                update: false,
            },
            comments: {
                read: false,
                delete: false,
            },
        },
        publisher: {
            submissionRequest: false,
        },
    },
};
