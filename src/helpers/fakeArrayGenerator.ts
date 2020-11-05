type FakeArrayGeneratorFn = (count: number) => ArrayConstructor[];
/**
 * @param count the length of our empty array
 */
export const fakeArrayGenerator: FakeArrayGeneratorFn = count => {
    return [...Array(count)];
};
