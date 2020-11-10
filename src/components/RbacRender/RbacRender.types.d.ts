export type RbacRenderProps = {
    permission: string;
};

type RbacRenderComponent = ({
    permission,
    children,
}: {
    permission: string;
    children: any;
}) => ReactElement;
export type RbacRenderComponentProps = RbacRenderProps;
