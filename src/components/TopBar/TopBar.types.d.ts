export type TopBarProps = {
    title?: string;
};

export type TopBarComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    keyof TopBarProps
> &
    TopBarProps & {
        onSearch: (text: string) => void;
        withSearchbar: boolean;
    };
