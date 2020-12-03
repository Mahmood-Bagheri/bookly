export const isTruncated = (el: HTMLElement) => {
    return el?.scrollWidth > el?.clientWidth;
};
