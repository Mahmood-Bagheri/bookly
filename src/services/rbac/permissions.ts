export const permissions = {
    guest: {
        routes: {
            login: true,
            register: true,
            categories: true,
            category: true,
            publishers: true,
            publisher: true,
            home: true,
            users: true,
            user: true,
            book: true,
            profile: {
                main: true,
                likedBooks: true,
                publicUser: true,
            },
            submitBook: true,
            error: true,
        },
        drawer: {
            see: true,
            users: false,
            books: false,
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
