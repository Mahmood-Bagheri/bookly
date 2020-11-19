export const permissions = {
    guest: {
        drawer: {
            see: true,
        },
        books: {
            read: true,
            create: true,
            update: true,
            delete: true,
            like: true,
        },
        comments: {
            read: true,
            create: true,
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
