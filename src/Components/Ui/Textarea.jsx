import clsx from "clsx";

const Textarea = ({
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
    disabled = false,
    required = false,
    rows = 4,
    resize = "vertical",
    className,
    ...props
}) => {
    const resizeStyles = {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
    };

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={name}
                    className={clsx(
                        "mb-2 flex items-center gap-1",
                        "text-xs font-medium",
                        "transition-colors duration-200",
                        error ? "text-red-500" : "text-gray-700",
                        disabled && "cursor-not-allowed text-gray-400"
                    )}
                >
                    {label} :

                    {required && (
                        <span className="text-red-500">*</span>
                    )}
                </label>
            )}

            <div
                className={clsx(
                    "w-full",
                    "rounded-xl border bg-white px-3 py-2.5",
                    "transition-all duration-200",
                    "focus-within:border-primary-300",

                    error
                        ? "border-red-400 focus-within:border-red-500 focus-within:ring-1 focus-within:ring-red-100"
                        : "border-gray-200",

                    disabled && "cursor-not-allowed bg-gray-100",

                    className
                )}
            >
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    rows={rows}
                    className={clsx(
                        "w-full min-w-0",
                        "bg-transparent",
                        "text-sm text-secondary-800",
                        "outline-none",
                        "placeholder:text-secondary-400 text-sm",
                        "leading-6",
                        resizeStyles[resize],

                        disabled &&
                            "cursor-not-allowed text-gray-400"
                    )}
                    {...props}
                />
            </div>

            {error && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Textarea;