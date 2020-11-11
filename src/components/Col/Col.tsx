import React, { FunctionComponent } from "react";
/* modules */
import clsx from "classnames";
/* types */
import { ColComponentProps } from "./Col.types";

export const Col: FunctionComponent<ColComponentProps> = ({
    col,
    lg,
    md,
    xl,
    className,
    children,
}) => {
    const xlClsx = clsx({ [`col-xl-${xl}`]: xl });
    const lgClsx = clsx({ [`col-lg-${lg}`]: lg });
    const mdClsx = clsx({ [`col-md-${md}`]: md });
    const colClsx = clsx({ [`col-${col}`]: col });

    return (
        <div
            className={clsx(className, colClsx, lgClsx, xlClsx, mdClsx).trim()}
        >
            {children}
        </div>
    );
};
