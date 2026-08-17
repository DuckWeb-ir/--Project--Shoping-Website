import clsx from "clsx";

const buttonVariants = {
    primary: "bg-primary-50 text-primary-600 hover:bg-primary-100",
    secondary: "bg-gray-100 text-gray-700 hover:bg-gray-200",
    dark: "bg-primary-700 text-white hover:bg-primary-800",
};

const iconSizes = {
    sm: "[&>svg]:size-3.5",
    md: "[&>svg]:size-4.5",
    lg: "[&>svg]:size-5",
};

export default function Button({
    children,
    icon,
    iconSize = "md",
    variant = "primary",
    className,
    ...props
}) {
    return (
        <button
            type="button"
            className={clsx(
                `
                group
                inline-flex h-10
                items-center justify-center
                gap-2
                rounded-lg
                px-4
                text-sm font-semibold
                transition-all duration-200
                disabled:pointer-events-none
                disabled:opacity-50
                `,
                buttonVariants[variant],
                className
            )}
            {...props}
        >
            {icon && (
                <span
                    className={clsx(
                        `
                        flex
                        shrink-0
                        items-center
                        justify-center
                        [&>svg]:transition-transform
                        [&>svg]:duration-200
                        group-hover:[&>svg]:scale-110
                        `,
                        iconSizes[iconSize]
                    )}
                >
                    {icon}
                </span>
            )}

            {children}
        </button>
    );
}