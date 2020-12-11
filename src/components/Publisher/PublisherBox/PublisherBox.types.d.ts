export type Publisher = {
    id: string;
    title: string;
    description?: string;
    imageSrc: string;
};
export type PublisherFunctions = {
    onFollow?: (id: string) => void;
    initialFollowingState?: boolean;
};

export type PublisherBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof PublisherFunctions
> &
    PublisherFunctions &
    Publisher;
