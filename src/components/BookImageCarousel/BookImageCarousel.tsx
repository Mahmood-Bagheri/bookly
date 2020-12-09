import React, { FC } from "react";
/* components */
import { Image } from "components/Image";
/* modules */
import SwiperCore, { Autoplay, SwiperOptions } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "classnames";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { generateFakeImageUrl } from "helpers/generateFakeImageUrl";
/* assets */
/* types */
import { BookImageCarouselProps } from "./BookImageCarousel.types";
import { $ElementProps } from "types/global";
/* styles */
import s from "./BookImageCarousel.module.scss";

SwiperCore.use([Autoplay]);

export const BookImageCarousel: FC<BookImageCarouselProps> = ({
    className,
    ...restProps
}) => {
    const swiperOptions: $ElementProps<typeof Swiper> & SwiperOptions = {
        spaceBetween: 10,
        slidesPerView: 1.1,
        loop: true,
        autoplay: {
            delay: 2000,
        },
    };

    return (
        <Swiper {...swiperOptions}>
            {fakeArrayGenerator(10).map(renderSwiperSlide)}
        </Swiper>
    );
};

const renderSwiperSlide = (item: unknown) => (
    <SwiperSlide>
        <Image src={generateFakeImageUrl()} className={s.imageSlide} />
    </SwiperSlide>
);
