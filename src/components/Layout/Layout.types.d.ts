import { HTMLProps } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type LayoutTypes = { withSearchbar: boolean };

export type LayoutProps = HTMLProps<HTMLDivElement> & LayoutTypes;
