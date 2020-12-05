export const fakeApiCall = <T>(): Promise<T> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
};
