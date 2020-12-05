import React from "react";
import { Layout } from "./Layout";

export const withLayout = <BaseProps extends {}>(
    BaseComponent: React.ComponentType<BaseProps>
) => {
    return (props: BaseProps) => {
        return (
            <Layout>
                <BaseComponent {...props} />
            </Layout>
        );
    };
};
