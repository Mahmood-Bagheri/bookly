export const conditionalText = (
    condition: boolean,
    ifTrue: string | number,
    ifFalse: string | number
) => {
    return condition ? ifTrue : ifFalse;
};
