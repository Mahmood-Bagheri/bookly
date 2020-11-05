export type InputComponentProps =
    | React.DetailedHTMLProps<
          React.TextareaHTMLAttributes<HTMLTextAreaElement>,
          HTMLTextAreaElement
      >
    | React.DetailedHTMLProps<
          React.InputHTMLAttributes<HTMLInputElement>,
          HTMLInputElement
      >;
