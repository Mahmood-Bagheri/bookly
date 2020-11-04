export type BaseLikeButtonProps = {
    onLikeStateChange: (likedState: boolean) => void;
};

export type LikeButtonComponentProps = React.HtmlHTMLAttributes<
    HTMLOrSVGElement
> &
    Partial<BaseLikeButtonProps>;
