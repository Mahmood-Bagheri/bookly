export const permissions = {
    guest: {
        home: {
            read: true,
        },
        books: {
            read: true,
            submit: true,
            update: true,
            delete: true,
            readSingle: true,
            like: true,
        },
        comments: {
            read: true,
            create: true,
            update: false,
            delete: true,
        },
        bookComments: {},
        category: {
            read: true,
            update: true,
            delete: true,
            create: true,
            readSingle: true,
        },
        profile: {
            read: true,
            update: true,
            readPublicUserProfile: true,
        },
        publisher: {
            read: true,
            readSingle: true,
            delete: true,
            update: true,
            create: true,
            submissionRequest: true,
        },
        users: {
            read: true,
            readSingle: true,
        },
        login: true,
        register: true,
    },
};

export type Permission = typeof permissions["guest"];
