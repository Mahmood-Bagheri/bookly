export const randomDate = (
    start: Date = new Date(),
    end: Date = new Date()
) => {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
};
