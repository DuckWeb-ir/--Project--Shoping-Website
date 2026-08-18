import clsx from "clsx";
import { Link } from "react-router";

const buttonVariants = {
    primary:
        "bg-primary-50 text-primary-600 hover:bg-primary-100",

    secondary:
        "bg-gray-100 text-gray-700 hover:bg-gray-200",

    dark:
        "bg-primary-600 text-white hover:bg-primary-700",

    outline:
        "border border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600",
};

const buttonSizes = {
    sm: `
        h-8
        gap-1.5
        rounded-md
        px-3
        text-xs
    `,

    md: `
        h-9
        gap-2
        rounded-lg
        px-3.5
        text-sm
    `,

    lg: `
        h-10
        gap-2
        rounded-lg
        px-4
        text-sm
    `,

    xl: `
        h-12
        gap-2.5
        rounded-lg
        px-4.5
        text-md
    `,
};

const iconSizes = {
    sm: "[&>svg]:size-3.5",
    md: "[&>svg]:size-4.5",
    lg: "[&>svg]:size-5",
    xl: "[&>svg]:size-5.5",
};

const iconHoverVariants = {
    scale: "group-hover:[&>svg]:scale-110",

    translate: {
        right: "group-hover:[&>svg]:translate-x-0.5",
        left: "group-hover:[&>svg]:-translate-x-0.5",
    },
};

export default function Button({
    children,
    icon,
    iconSize,
    iconHover = "scale",
    iconPosition = "right",
    size = "lg",
    variant = "primary",
    className,
    to,
    ...props
}) {
    const Component = to ? Link : "button";

    const iconElement = icon && (
        <span
            className={clsx(
                `
                flex
                shrink-0
                items-center
                justify-center
                [&>svg]:transition-transform
                [&>svg]:duration-200
                `,
                iconSizes[iconSize || size],

                iconHover === "scale"
                    ? iconHoverVariants.scale
                    : iconHoverVariants.translate[iconPosition]
            )}
        >
            {icon}
        </span>
    );

    return (
        <Component
            {...(to ? { to } : { type: "button" })}
            className={clsx(
                `
                group
                inline-flex
                items-center
                justify-center
                font-semibold
                transition-all
                duration-200
                cursor-pointer
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-50
                `,
                buttonSizes[size],
                buttonVariants[variant],
                className
            )}
            {...props}
        >
            {iconPosition === "right" && iconElement}

            {children}

            {iconPosition === "left" && iconElement}
        </Component>
    );
}