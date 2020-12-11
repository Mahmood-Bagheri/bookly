export type BaseLikeButtonProps = {
    onBookmarkStateChange: (likeState: boolean) => void;
    initialBookmarkState: boolean;
};

export type BookmarkButtonComponentProps = React.HtmlHTMLAttributes<
    HTMLOrSVGElement
> &
    Partial<BaseLikeButtonProps>;
