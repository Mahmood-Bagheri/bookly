import React from 'react';
type CommonProps = {
    children: React.ReactNode;
    miscProps?: any;
};

type NoTruncateProps = CommonProps & { truncate?: false };

type TruncateProps = CommonProps & { truncate: true; expanded?: boolean };

// Function overloads to accept both prop types NoTruncateProps & TruncateProps
export function ExpandableText(props: NoTruncateProps): JSX.Element;
export function ExpandableText(props: TruncateProps): JSX.Element;
export function ExpandableText(
    props: CommonProps & { truncate?: boolean; expanded?: boolean }
) {
    const { children, truncate, expanded, ...otherProps } = props;
    const classNames = truncate ? '.truncate' : '';
    return (
        <div className={classNames} aria-expanded={!!expanded} {...otherProps}>
            {children}
        </div>
    );
}
