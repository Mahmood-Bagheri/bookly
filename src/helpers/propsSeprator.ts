export const propsSeprator = <T, P>(
    props: T | P,
    seprator: keyof T
): props is T => seprator in props;
