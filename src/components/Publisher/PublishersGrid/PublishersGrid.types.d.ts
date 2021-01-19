import { Publisher } from "components/Publisher";

export type PublishersGridProps = {
    loading?: boolean;
    publishers: Maybe<Publisher[]>;
};

export type PublishersGridComponentProps = React.HtmlHTMLAttributes<
    HTMLDivElement
> &
    PublishersGridProps;
