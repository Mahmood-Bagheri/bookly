import { Publisher } from "components/PublisherBox";

export type PublishersGridProps = {
    loading?: boolean;
    publishers: Publisher[];
};

export type PublishersGridComponentProps = React.HtmlHTMLAttributes<
    HTMLDivElement
> &
    PublishersGridProps;
