import { HTMLProps } from 'react';

export type CategoryDetailsBoxTypes = {
    categoryTitle: string;
    // description: string;
    imageSrc: string;
    loading?: boolean;
};

export type CategoryDetailsBoxProps = HTMLProps<HTMLDivElement> &
    CategoryDetailsBoxTypes;
