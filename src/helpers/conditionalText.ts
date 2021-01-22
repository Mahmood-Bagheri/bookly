/**
 *
 * @param condition condition
 * @param ifTrue what should be returned if the condition was true
 * @param ifFalse what should be returned if the condition was false
 * @description renders a text based on  condition
 */
export const conditionalText = (
    condition: boolean,
    ifTrue: string | number | JSX.Element,
    ifFalse: string | number | JSX.Element
) => {
    return condition ? ifTrue : ifFalse;
};
