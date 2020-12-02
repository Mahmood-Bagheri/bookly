import { randomDate } from "helpers/randomDate";
import { uniqueId } from "helpers/uniqueId";

export const comments = [
    {
        id: uniqueId(),
        username: "آنشرلی",
        date: randomDate(new Date("2020/1/1")),
        body: "خیلی کتاب خوبی بود، به دوستامم هدیه دادمش.",
    },
    {
        id: uniqueId(),
        username: "آنشرلی",
        date: randomDate(new Date("2020/1/1")),
        body: "خیلی کتاب خوبی بود، به دوستامم هدیه دادمش.",
    },
    {
        id: uniqueId(),
        username: "آنشرلی",
        date: randomDate(new Date("2020/1/1")),
        body: "خیلی کتاب خوبی بود، به دوستامم هدیه دادمش.",
    },
];
