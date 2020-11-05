import React, { FunctionComponent } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "assets/images/book.jpg";
import { BooksCarouselComponentProps } from "./BooksCarousel.types";
import s from "./BooksCarousel.module.scss";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Autoplay]);

export const BooksCarousel: FunctionComponent<BooksCarouselComponentProps> = props => {
    const swiperProps = {
        spaceBetween: 10,
        slidesPerView: 1.45,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        className: "mt-2",
    };

    return (
        <Swiper {...swiperProps}>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Image} className={s.imageSlide} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};
