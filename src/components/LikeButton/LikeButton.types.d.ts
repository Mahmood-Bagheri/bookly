export type BaseLikeButtonProps = {
    onLikeStateChange: (likeState: boolean) => void;
    initialLikeState: boolean;
    loading: boolean;
};

export type LikeButtonComponentProps = React.HtmlHTMLAttributes<
    HTMLOrSVGElement
> &
    Partial<BaseLikeButtonProps>;
