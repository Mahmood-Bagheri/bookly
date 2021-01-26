import React, { FunctionComponent } from 'react';
/* modules */
import clsx from 'classnames';
/* types */
import { ColComponentProps } from './Col.types';

export const Col: FunctionComponent<ColComponentProps> = ({
    col,
    lg,
    md,
    xl,
    sm,
    className,
    children,
}) => {
    const xlClsx = clsx({ [`col-xl-${xl}`]: xl });
    const lgClsx = clsx({ [`col-lg-${lg}`]: lg });
    const mdClsx = clsx({ [`col-md-${md}`]: md });
    const smClsx = clsx({ [`col-sm-${sm}`]: sm });
    const colClsx = clsx({ [`col-${col}`]: col });

    return (
        <div
            className={clsx(
                className,
                colClsx,
                smClsx,
                lgClsx,
                xlClsx,
                mdClsx
            ).trim()}
        >
            {children}
        </div>
    );
};
