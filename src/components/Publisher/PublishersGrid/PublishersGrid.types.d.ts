import { Publisher } from "components/Publisher";

export type PublishersGridProps = {
    loading?: boolean;
    publishers: Publisher[];
};

export type PublishersGridComponentProps = React.HtmlHTMLAttributes<
    HTMLDivElement
> &
    PublishersGridProps;
