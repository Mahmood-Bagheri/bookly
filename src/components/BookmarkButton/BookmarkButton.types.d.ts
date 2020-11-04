export type BaseLikeButtonProps = {
    onBookmarkStateChange: (likeState: boolean) => void;
};

export type BookmarkButtonComponentProps = React.HtmlHTMLAttributes<
    HTMLOrSVGElement
> &
    Partial<BaseLikeButtonProps>;
