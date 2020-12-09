type Maybe<T> = T | undefined | null;

export const isNullOrEmptyString = (arg: Maybe<string>) => {
    if (!arg) {
        return true;
    }
    return false;
};
