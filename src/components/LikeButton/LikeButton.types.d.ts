import { HTMLProps, SVGProps } from "react";

export type BaseLikeButtonProps = {
    initialLikeState: boolean;
    loading: boolean;
    permission: string;
    onChange: (likeState: boolean) => void;
};

export type LikeButtonComponentProps = Omit<
    React.SVGProps<SVGSVGElement>,
    keyof BaseLikeButtonProps
> &
    BaseLikeButtonProps;
