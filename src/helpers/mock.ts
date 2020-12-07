import { get, shuffle } from "lodash";
import * as mockData from "mock";

// todo -> delete this any Shit
/**
 *
 * @param mockKey can be keyof /mocks folder's data's object
 * @param count count of needed mocked array
 * @description this function picks a few number of mock data from the /mocks folder's data
 */
export const mock = <T extends any>(
    mockKey: keyof typeof mockData,
    count?: number
): T[] => {
    const mocks = get(mockData, mockKey);
    count = mocks.length;
    if (mocks.length < count) {
        return mocks as T[];
    }
    return shuffle(mocks.slice(0, count)) as T[];
};
