export function fakeApiCall<T>(): any {
    return new Promise((resolve, reject) => {
        setTimeout(() => {}, 1000);
    });
}
