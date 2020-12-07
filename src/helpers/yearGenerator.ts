export const yearGenerator = (from: number, to: number) => {
    let arrayOfGeneratedNumbers: Array<number> = [];
    for (let i = from; i <= to; i++) {
        arrayOfGeneratedNumbers.push(i);
    }
    return arrayOfGeneratedNumbers;
};
