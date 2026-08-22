import clsx from "clsx";

const Input = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    error,
    disabled = false,
    required = false,

    icon,
    iconPosition = "right",

    textAlign = "right",

    className,
    ...props
}) => {



    const inputAlign = {
        left: "text-left",
        center: "text-center",
        right: "text-right",
    };

    const iconPositionStyles = {
        right: "order-first ml-2",
        left: "order-last mr-2",
    };


    return (
        <div className="w-full">
            {/* Label */}
            {label && (
                <label
                    htmlFor={name}
                    className={clsx(
                        "mb-2 flex items-center gap-1",
                        "text-xs font-medium",
                        "transition-colors duration-200",

                        error ? "text-red-500" : "text-gray-700",

                        disabled &&
                            "cursor-not-allowed text-gray-400"
                    )}
                > 
                    {label} :

                    {required && (
                        <span className="text-red-500">*</span>
                    )}
                </label>
            )}

            {/* Input Wrapper */}
            <div
                className={clsx(
                    "flex h-12 w-full items-center",
                    "rounded-xl border bg-white px-3",
                    "transition-all duration-200",

                    // Focus
                    "focus-within:border-primary-300 ",

                    // Error
                    error
                        ? "border-red-400 focus-within:border-red-500 focus-within:ring-red-100"
                        : "border-gray-200",

                    // Disabled
                    disabled &&
                        "cursor-not-allowed bg-gray-100",

                    className
                )}
            >
                {/* Icon */}
                {icon && (
                    <span
                        className={clsx(
                            "flex h-9 w-9 shrink-0 items-center justify-center",
                            "rounded-lg bg-white",
                            "text-gray-400",
                            "transition-colors duration-200",

                            iconPositionStyles[iconPosition],

                            error && "text-red-400",

                            disabled && "text-gray-300"
                        )}
                    >
                        {icon}
                    </span>
                )}

                {/* Input */}
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    className={clsx(
                        "h-full min-w-0 flex-1",
                        "bg-transparent",
                        "text-sm text-secondary-800",
                        "outline-none",
                        "placeholder:text-secondary-400 text-sm ",
                        

                        inputAlign[textAlign],

                        disabled &&
                            "cursor-not-allowed text-gray-400"
                    )}
                    {...props}
                />
            </div>

            {/* Error */}
            {error && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;