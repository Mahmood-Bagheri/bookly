type RandomDateGeneratorFn = (start: Date, end: Date) => Date;
/**
 * @param description This utility generates a random date between the given start and end date
 * @param start the start date
 * @param end the end date
 */
export const randomDate: RandomDateGeneratorFn = (
    start = new Date(),
    end = new Date()
) => {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
};
