export const checkInclusion = (
    textWeWantToCheckInclusion: string,
    text: string
) => {
    if (!text) {
        return true;
    }
    return textWeWantToCheckInclusion
        .toLowerCase()
        .trim()
        .includes(text.trim().toLowerCase());
};
