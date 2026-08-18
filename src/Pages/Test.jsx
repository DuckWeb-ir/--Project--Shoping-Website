import {
    LogIn,
    Plus,
    Trash2,
    ArrowLeft,
    Download,
} from "lucide-react";
import Button from "../Components/Ui/‌Btn";

const variants = [
    {
        name: "Primary",
        variant: "primary",
    },
    {
        name: "Secondary",
        variant: "secondary",
    },
    {
        name: "Dark",
        variant: "dark",
    },
    {
        name: "Outline",
        variant: "outline",
    },
];

const sizes = ["sm", "md", "lg"];

export default function Test() {
    return (
        <div className="space-y-10 p-8">

            {/* ================= Variants ================= */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Button Variants
                    </h2>

                    <p className="text-sm text-gray-500">
                        Different visual styles
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {variants.map(({ name, variant }) => (
                        <div
                            key={variant}
                            className="flex flex-col items-center gap-2"
                        >
                            <Button
                                variant={variant}
                                icon={<LogIn />}
                            >
                                ورود | ثبت‌نام
                            </Button>

                            <span className="text-xs text-gray-400">
                                {name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= Sizes ================= */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Button Sizes
                    </h2>

                    <p className="text-sm text-gray-500">
                        Small, medium and large
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    {sizes.map((size) => (
                        <div
                            key={size}
                            className="flex flex-col items-center gap-2"
                        >
                            <Button
                                size={size}
                                variant="outline"
                                icon={<Plus />}
                            >
                                افزودن
                            </Button>

                            <span className="text-xs text-gray-400">
                                {size.toUpperCase()}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= With Icons ================= */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Buttons With Icons
                    </h2>

                    <p className="text-sm text-gray-500">
                        Different icon positions and actions
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        variant="primary"
                        icon={<Plus />}
                    >
                        افزودن
                    </Button>

                    <Button
                        variant="secondary"
                        icon={<Download />}
                    >
                        دانلود
                    </Button>

                    <Button
                        variant="dark"
                        icon={<LogIn />}
                    >
                        ورود
                    </Button>

                    <Button
                        variant="outline"
                        icon={<Trash2 />}
                    >
                        حذف
                    </Button>
                </div>
            </section>

            {/* ================= Icon Sizes ================= */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Icon Sizes
                    </h2>

                    <p className="text-sm text-gray-500">
                        Independent icon sizing
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        size="md"
                        iconSize="sm"
                        icon={<ArrowLeft />}
                    >
                        Small Icon
                    </Button>

                    <Button
                        size="md"
                        iconSize="md"
                        icon={<ArrowLeft />}
                    >
                        Medium Icon
                    </Button>

                    <Button
                        size="md"
                        iconSize="lg"
                        icon={<ArrowLeft />}
                    >
                        Large Icon
                    </Button>
                </div>
            </section>

            {/* ================= Disabled ================= */}
            <section className="space-y-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Disabled
                    </h2>

                    <p className="text-sm text-gray-500">
                        Disabled button states
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        variant="primary"
                        disabled
                        icon={<Plus />}
                    >
                        Primary
                    </Button>

                    <Button
                        variant="secondary"
                        disabled
                        icon={<Plus />}
                    >
                        Secondary
                    </Button>

                    <Button
                        variant="dark"
                        disabled
                        icon={<Plus />}
                    >
                        Dark
                    </Button>

                    <Button
                        variant="outline"
                        disabled
                        icon={<Plus />}
                    >
                        Outline
                    </Button>
                </div>
            </section>

            {/* ================= Full Width ================= */}
            <section className="max-w-md space-y-4">
                <div>
                    <h2 className="text-lg font-bold text-gray-900">
                        Full Width
                    </h2>
                </div>

                <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={<LogIn />}
                >
                    ورود | ثبت‌نام
                </Button>
            </section>
        </div>
    );
}