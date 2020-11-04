import React from "react";
import classnames from "classnames";

// * these are the base custom button props
type ButtonSizeType = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonTypeType =
    | "primary"
    | "info"
    | "light-info"
    | "warning"
    | "danger"
    | "success"
    | "dark-info"
    | "default";

type ButtonProps = {
    size: ButtonSizeType;
    type: ButtonTypeType;
    block: boolean;
    rounded: boolean;
};

// * integrate HTML button props with our custom props
type ButtonComponentProps = Omit<
    React.HtmlHTMLAttributes<HTMLButtonElement>,
    keyof ButtonProps
> &
    Partial<ButtonProps>;

export const Button: React.FC<ButtonComponentProps> = props => {
    // * destruct needed props
    const {
        size = "sm",
        type = "default",
        block = false,
        rounded = true,
        className: nativeClassName,
        ...restProps
    } = props;

    // * switch on the types and make suitable size & types
    let sizeClassname = makeSize(size);
    let typeClassname = makeType(type);

    // * check if our button is fullwidth or rounded
    let blockClassname = block ? "w-full" : "";
    let roundedClassname = rounded ? "rounded-full" : "";

    const classNames = [
        nativeClassName,
        sizeClassname,
        typeClassname,
        blockClassname,
        roundedClassname,
    ];

    // * render the button 🔥
    return <button className={classnames(classNames)} {...restProps} />;
};

function makeSize(size: ButtonSizeType) {
    switch (size) {
        case "xs":
            return ["px-4", "py-1", "text-xs"];

        case "sm":
            return ["px-6", "py-2", "text-sm"];

        case "md":
            return ["px-8", "py-3", "text-md"];

        case "lg":
            return ["px-10", "py-4", "text-lg"];

        case "xl":
            return ["px-12", "py-5", "text-xl"];

        // sm by default
        default:
            return ["p-4", "py-2", "text-sm"];
    }
}

function makeType(type: ButtonTypeType) {
    switch (type) {
        case "default":
            return ["bg-white", "text-black"];

        case "danger":
            return ["text-white", "bg-red"];

        case "info":
            return ["text-white", "bg-mid-blue"];

        case "light-info":
            return ["text-black", "bg-light-blue"];

        case "primary":
            return ["text-white", "bg-blue"];

        case "success":
            return ["text-white", "bg-green"];

        case "warning":
            return ["text-white", "bg-orange"];

        case "dark-info":
            return ["text-white", "bg-dark-blue"];

        // default button type, the most simple 🎈

        default:
            return ["bg-white", "text-black"];
    }
}
