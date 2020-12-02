/**
 * @param count the length of our empty array
 * @description generates a fake array
 */
export const fakeArrayGenerator = (count: number): ArrayConstructor[] => {
    return [...Array(count)];
};
