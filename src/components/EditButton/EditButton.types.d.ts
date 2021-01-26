import { ComponentPropsWithoutRef, HTMLProps } from 'react';

export type CommonProps = {
    permission: string;
};

export type EditButtonProps = ComponentPropsWithoutRef<'svg'> & CommonProps;
