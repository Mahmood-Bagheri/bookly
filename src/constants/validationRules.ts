import { Rule } from "antd/lib/form";

type ValidationRuleType = Record<string, Rule[]>;

export const LOGIN_FORM_VALIDATION_RULES: ValidationRuleType = {
    username: [
        {
            required: true,
            message: "نام کاربری را وارد کنید",
        },
    ],
    password: [
        {
            required: true,
            message: "رمز عبور را وارد کنید",
        },
    ],
};

export const REGISTER_FORM_VALIDATION_RULES: ValidationRuleType = {
    username: [
        {
            required: true,
            message: "نام کاربری را وارد کنید",
        },
    ],
    password: [
        {
            required: true,
            message: "رمز عبور را وارد کنید",
        },
    ],
    confirmPassword: [
        {
            required: true,
            message: "تکرار رمز عبور را وارد کنید",
        },
        ({ getFieldValue }) => ({
            validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                }
                return Promise.reject("تکرار پسورد، با پسورد برابر نیست!");
            },
        }),
    ],
};

export const BOOK_COMMENT_VALIDATION_RULES: ValidationRuleType = {
    comment: [
        {
            required: true,
            message: "متن نظر نمی تواند خالی باشد :(",
        },
    ],
};
