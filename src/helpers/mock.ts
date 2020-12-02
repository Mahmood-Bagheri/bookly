import { get, shuffle } from "lodash";
import * as mockData from "mock";

// todo -> delete this any Shit
export const mock = <T extends any>(
    mockKey: keyof typeof mockData,
    count: number = 5
): T[] => {
    const mocks = get(mockData, mockKey);

    if (mocks.length < count) {
        return mocks as T[];
    }
    return shuffle(mocks.slice(0, count)) as T[];
};
