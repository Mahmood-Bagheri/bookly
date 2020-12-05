export const fakeApiCall = ({
    responseTime = 3000,
}: {
    responseTime: number;
}) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, responseTime);
    });
};
