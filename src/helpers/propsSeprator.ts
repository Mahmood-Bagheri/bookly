export function propsSeprator<T, P>(
    props: T | P,
    seprator: keyof T
): props is T {
    return seprator in props;
}
