import { AxiosError } from "axios";

interface ServerError {
    message: object;
}

/* customize the AxiosError object type */
declare module "axios" {
    interface ApiServiceError extends AxiosError<ServerError> {}
}

/* picks all types of a specific component */
declare type $ElementProps<T> = T extends React.ComponentType<infer Props>
    ? Props extends object
        ? Props
        : never
    : never;

type ComponentProps<T> = T extends
    | React.ComponentType<infer P>
    | React.Component<infer P>
    ? JSX.LibraryManagedAttributes<T, P>
    : never;

/* usage 
const TestComponent = (props: ComponentProps<typeof GreetComponent>) => {
  return <h1 />;
}; */
