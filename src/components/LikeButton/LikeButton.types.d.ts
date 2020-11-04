export type BaseLikeButtonProps = {
    onLikeStateChange: (likeState: boolean) => void;
};

export type LikeButtonComponentProps = React.HtmlHTMLAttributes<
    HTMLOrSVGElement
> &
    Partial<BaseLikeButtonProps>;
