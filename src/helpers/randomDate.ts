/**
 * @param description This utility generates a random date between the given start and end date
 * @param start the start date
 * @param end the end date
 */
export const randomDate = (
    start: Date = new Date(),
    end: Date = new Date()
): Date => {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
};
