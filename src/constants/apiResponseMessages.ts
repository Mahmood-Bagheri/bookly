const API_RESPONSE_MESSAGES = {
    user: {
        delete: {
            success: `کاربر با موفقیت حذف شد!`,
            error: `مشکلی در حذف کردن کاربر پیش آمد!`,
        },
    },
    book: {
        create: {
            success: `کتاب شما با موفقیت ثبت شد`,
            error: "مشکلی در ثبت کردن کتاب پیش آمد!",
        },

        delete: {
            success: "کتاب با موفقیت حذف شد",
            error: "مشکلی در حذف کردن کتاب پیش آمد",
        },
        like: {
            success: "کتاب با موفقیت لایک شد!",
            error: "مشکلی در لایک کردن کتاب پیش آمد",
        },
    },
    comment: {
        create: {
            success: "نظر با موفقت ثبت شد",
            error: "مشکلی در ثبت نظر پیش آمد",
        },
        delete: {
            success: "نظر با موفقیت حذف شد",
            error: "مشکلی در حذف کردن نظر پیش آمد",
        },
    },
    publisher: {
        follow: {
            success: `ناشر با موفقیت فالو شد`,
            error: "مشکلی در دنبال کردن ناشر پیش آمد!",
        },
    },
    register: {
        error: "مشکلی در ثبت نام پیش آمد!",
        success: "ثبت نام با موفقیت انجام شد",
    },
    login: {
        error: "نام کاربری یا رمز عبور اشتباه می باشد!",
        success: "با موفقیت وارد شدید :)",
    },
};

export default API_RESPONSE_MESSAGES;
