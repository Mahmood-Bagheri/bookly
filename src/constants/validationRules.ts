import { Rule } from "antd/lib/form";

type ValidationRuleType = {
    [key: string]: Rule[];
};

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
export const REGISTER_FORM_VALIDATION_RULES = {
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
    ],
};
