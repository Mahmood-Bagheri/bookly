/**
 *
 * @param condition condition
 * @param ifTrue what should be returned if the condition was true
 * @param ifFalse what should be returned if the condition was false
 * @description renders a text based on  condition
 */
export const conditionalText = (
    condition: boolean,
    ifTrue: string | number,
    ifFalse: string | number
) => {
    return condition ? ifTrue : ifFalse;
};
