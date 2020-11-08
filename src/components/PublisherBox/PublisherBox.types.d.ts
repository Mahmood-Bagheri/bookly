export type PublisherBoxProps = {
    title: string;
    description?: string;
    imageSrc: string;
    onFollow?: (id: number) => void;
    initialFollowingState?: boolean;
};

export type PublisherBoxComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof PublisherBoxProps
> &
    PublisherBoxProps;
