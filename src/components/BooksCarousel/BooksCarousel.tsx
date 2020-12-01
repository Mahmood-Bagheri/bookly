import React, { FunctionComponent } from "react";
/* modules */
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
/* components */
import { Image } from "components/Image";
/* helpers */
import { fakeArrayGenerator } from "helpers/fakeArrayGenerator";
/* assets */
import Book from "assets/images/book.jpg";
/* types */
import { BooksCarouselComponentProps } from "./BooksCarousel.types";
/* styles */
import s from "./BooksCarousel.module.scss";
import { uniqueId } from "helpers/uniqueId";

SwiperCore.use([Autoplay]);

export const BooksCarousel: FunctionComponent<BooksCarouselComponentProps> = props => {
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
