import { HTMLProps } from "react";

export type FeedFilterBoxTypes = {
    onSearch: (text: string) => void;
};

export type FeedFilterBoxProps = HTMLProps<HTMLDivElement> & FeedFilterBoxTypes;
