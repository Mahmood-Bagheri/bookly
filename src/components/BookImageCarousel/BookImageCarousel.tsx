import React, { FC } from "react";
/* components */
/* modules */
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import clsx from "classnames";
/* helpers */
/* assets */
/* types */
import { BookImageCarouselProps } from "./BookImageCarousel.types";
/* styles */
import s from "./BookImageCarousel.module.scss";
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
import { Image } from "components/Image";
import { uniqueId } from "helpers/uniqueId";
SwiperCore.use([Autoplay]);

export const BookImageCarousel: FC<BookImageCarouselProps> = ({
    className,
    ...restProps
}) => {
    const swiperProps = {
        spaceBetween: 10,
        slidesPerView: 1.1,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        className: "mt-2",
    };

    return (
        <Swiper {...swiperProps}>
            {fakeArrayGenerator(10).map(renderSwiperSlide)}
        </Swiper>
    );
};

const renderSwiperSlide = (item: unknown) => (
    <SwiperSlide>
        <Image
            src={`https://source.unsplash.com/500x500/?book&sig=${uniqueId()}`}
            className={s.imageSlide}
        />
    </SwiperSlide>
);
