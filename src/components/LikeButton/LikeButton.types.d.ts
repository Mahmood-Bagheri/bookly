export type BaseLikeButtonProps = {
    onLikeStateChange: (likeState: boolean) => void;
    initialLikeState: boolean;
};

export type LikeButtonComponentProps = React.HtmlHTMLAttributes<
    HTMLOrSVGElement
> &
    Partial<BaseLikeButtonProps>;
