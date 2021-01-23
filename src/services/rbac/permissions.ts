export const permissions = {
    guest: {
        home: {
            read: true,
        },
        books: {
            read: true,
            submit: false,
            update: false,
            delete: false,
            readSingle: true,
            like: false,
        },
        comments: {
            read: true,
            create: false,
            update: false,
            delete: false,
        },
        bookComments: {},
        category: {
            read: true,
            update: false,
            delete: false,
            create: false,
            readSingle: true,
        },
        author: {
            read: true,
            update: false,
            delete: false,
            create: false,
            readSingle: true,
        },
        profile: {
            read: false,
            update: false,
            readPublicUserProfile: true,
        },
        publisher: {
            read: true,
            readSingle: true,
            delete: false,
            update: false,
            create: false,
            submissionRequest: false,
        },
        users: {
            read: false,
            readSingle: false,
        },
        login: true,
        register: true,
    },
    user: {
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
