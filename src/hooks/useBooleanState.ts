import { useCallback, useState } from "react";

export const useBooleanState = (initialState: boolean = false) => {
    const [state, updateState] = useState<boolean>(initialState);

    const makeFalse = () => {
        updateState(false);
    };
    const makeTrue = () => {
        updateState(true);
    };
    const toggleState = () => {
        updateState(prevState => !prevState);
    };

    return [state, toggleState, makeFalse, makeTrue];
};

export const useToggle = (initialState: boolean) => {
    const [isToggled, setIsToggled] = useState(initialState);

    // put [setIsToggled] into the useCallback's dependencies array
    // this value never changes so the callback is not going to be ever re-created
    const toggle = useCallback(() => setIsToggled(state => !state), [
        setIsToggled,
    ]);

    return [isToggled, toggle];
};
