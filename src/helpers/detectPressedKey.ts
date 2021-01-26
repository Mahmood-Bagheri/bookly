import { KeyboardKeys } from 'types/global';

export const detectPressedKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    is: KeyboardKeys
) => {
    if (e.key === is) {
        return true;
    }
    return false;
};
