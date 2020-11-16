export type PublisherBoxProps = {
    id: string;
    title: string;
    description?: string;
    imageSrc: string;
    onFollow?: (id: string) => void;
    initialFollowingState?: boolean;
};

export type PublisherBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof PublisherBoxProps
> &
    PublisherBoxProps;
