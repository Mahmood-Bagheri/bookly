type ConditionalRenderFn = {
    component: JSX.Element;
    canDo: boolean;
};

// export const rbacRender = ({ canDo, component }: ConditionalRenderFn) => {
//     if (canDo) {
//         return component;
//     }
//     return null;
// };
export const rbacRender = (component: JSX.Element, canDo: boolean) => {
    if (canDo) {
        return component;
    }
    return null;
};
