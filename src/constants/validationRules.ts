import { Rule } from "antd/lib/form";
import apiService from "services/api/apiService";
import API_URLS from "./apiUrls";
import * as REGEX from "./regex";

type ValidationRuleType = Record<string, Rule[]>;

export const LOGIN_FORM_VALIDATION_RULES: ValidationRuleType = {
    email: [
        {
            required: true,
            message: "ایمیل را وارد کنید",
        },
        {
            pattern: REGEX.Email,
            message: "فرمت ایمیل وارد شده صحیح نیست!",
        },
    ],
    password: [
        {
            required: true,
            message: "رمز عبور را وارد کنید",
        },
    ],
};

const checkEmailExistance = async (email: string) => {
    try {
        const { data } = await apiService.post(API_URLS.checkEmail, { email });
        return data;
    } catch (error) {}
};

export const REGISTER_FORM_VALIDATION_RULES: ValidationRuleType = {
    name: [
        {
            required: true,
            message: "نام را وارد کنید",
        },
    ],
    email: [
        {
            required: true,
            message: "ایمیل را وارد کنید",
        },
        {
            pattern: REGEX.Email,
            message: "فرمت ایمیل وارد شده صحیح نیست!",
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
export const PROFILE_FORM_RULES: ValidationRuleType = {
    name: [{ required: true }],
    profileImage: [{ required: false }],
    biography: [],
};
