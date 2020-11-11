export type RbacRenderProps = {
    permission: string;
};

type RbacRenderComponent = ({
    permission,
    children,
}: {
    permission: string;
    children: JSX.Element;
}) => ReactElement;
export type RbacRenderComponentProps = RbacRenderProps;
