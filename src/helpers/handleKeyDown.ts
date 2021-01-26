import { KeyboardKeys } from 'types/global';

export const handleOnKeyDown = (
    target: React.KeyboardEvent<HTMLInputElement>,
    key: KeyboardKeys,
    cb: Function
) => {
    switch (key) {
        case 'Enter':
            return cb(target);
        case 'Escape':
            return cb('');
        default:
            return;
    }
};
