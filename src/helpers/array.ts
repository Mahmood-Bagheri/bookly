/**
 * @function
 * @name deepFlatten
 * @description Deep flatten an array
 * @param     array       {array}     the multi dimensional array that want to be flatten
 * @example flatten([1, 2, 3, [4, 5, [6, 7, [9, 8]]]]);
 * @returns   {Array}
 */
export const flatten = (array: Array<any>): Array<any> => {
    return array.reduce((acc, e) => {
        if (Array.isArray(e)) {
            // if the element is an array, fall flatten on it again and then take the returned value and concat it.
            return acc.concat(flatten(e));
        } else {
            // otherwise just concat the value.
            return acc.concat(e);
        }
    }, []); // initial value for the accumulator is []
};
