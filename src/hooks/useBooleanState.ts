import { useState } from "react";

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
    return { state, toggleState, makeFalse, makeTrue };
};
