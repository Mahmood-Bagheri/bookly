import React, { FunctionComponent } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Book from "assets/images/book.jpg";
import { BooksCarouselComponentProps } from "./BooksCarousel.types";
import s from "./BooksCarousel.module.scss";
import { Image } from "components/Image";

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
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
            <SwiperSlide>
                <Image src={Book} className={s.imageSlide} />
            </SwiperSlide>
        </Swiper>
    );
};
