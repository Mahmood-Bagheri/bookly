import { PublisherBox as Component } from "./PublisherBox";
import { PublisherBoxShimmer as Shimmer } from "./PublisherBoxShimmer";
import { PublisherBoxShimmerGrid as ShimmerGrid } from "./PublisherBoxShimmerGrid";

export const PublisherBox = Object.assign(
    {},
    {
        Component,
        Shimmer,
        ShimmerGrid,
    }
);
export * from "./PublisherBox.types.d";
