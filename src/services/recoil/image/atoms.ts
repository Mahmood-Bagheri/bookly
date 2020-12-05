import { atom } from "recoil";

type ImageLoadingState = "loading" | "loaded";

export const imageState = atom<ImageLoadingState>({
    key: "roleState",
    default: "loading",
});
