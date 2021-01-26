import React from 'react';
import { DescriptionBox } from 'components/DescriptionBox';

export const BookDescriptionContainer = () => {
    const description = `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد`;

    return <DescriptionBox title='مشخصات کتاب' description={description} />;
};
