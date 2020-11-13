/**
 * @param count the length of our empty array
 */
export const fakeArrayGenerator = (count: number): ArrayConstructor[] => {
    return [...Array(count)];
};
