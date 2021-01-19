import { Publisher as PublisherNameSpace } from "types/publisher";
export type PublisherFunctions = {
    onFollow?: (id: string) => void;
    initialFollowingState?: boolean;
};
export type Publisher = PublisherFunctions & Publisher.Query.Result;

export type PublisherBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof PublisherFunctions
> &
    PublisherFunctions &
    PublisherNameSpace.Query.Result;
