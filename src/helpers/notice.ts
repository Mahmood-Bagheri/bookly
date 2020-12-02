import { message } from "antd";
import { ArgsProps } from "antd/lib/message";

// todo -> make this file better in structure :/

type NoticeType = "info" | "success" | "error" | "warning" | "loading";

const notice = (type: NoticeType, props: Partial<ArgsProps>) => {
    return message[type](props);
};

export const info = (content: string) => notice("info", { content });
export const error = (content: string) => notice("error", { content });
export const warning = (content: string) => notice("warning", { content });
export const success = (content: string) => notice("success", { content });
export const loading = (content: string) => notice("loading", { content });
