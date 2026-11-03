
import logo from "../../../public/assets/static/Logo.png"
import logoType from "../../../public/assets/static/logoType1.png"

import {
    Cpu,
    Camera,
    Smartphone,
    Monitor,
    Laptop,
    Watch,
    Headphones,
    MoreHorizontal,
    FileText,
    CalendarDays,
    Info,
    MapPin,
    Phone,
    Send,
    MessageCircle,
    ShieldCheck,
    PenLine,
    ArrowLeft,
} from "lucide-react";

import { Instagram, Twitter } from "lucide-brands";

const categories = [
    { title: "پردازنده", icon: Cpu },
    { title: "دوربین", icon: Camera },
    { title: "موبایل", icon: Smartphone },
    { title: "مانیتور", icon: Monitor },
    { title: "لپ‌تاپ", icon: Laptop },
    { title: "ساعت", icon: Watch },
    { title: "هدفون", icon: Headphones },
    { title: "بیشتر", icon: MoreHorizontal },
];

const quickLinks = [
    { title: "وبلاگ", icon: FileText, href: "#" },
    { title: "ویدیوها", icon: CalendarDays, href: "#" },
    { title: "درباره ما", icon: Info, href: "#" },
];

const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Send, href: "#", label: "Telegram" },
];

function Footer() {
    return (
        <footer
            className="container my-5"
        >
            <div className="box-style p-0 overflow-hidden ">

                {/* Main Footer */}
                <div className="flex flex-col lg:flex-row">

                    {/* Brand */}
                    <div className="w-full border-b border-secondary-100 p-6 lg:w-[34%] lg:border-b-0 lg:border-l ">
                        <a href="#" className=" mb-5 flex items-center justify-center lg:justify-start gap-2">
                            <img src={logo} alt="logo" className="w-10" />
                            <img src={logoType} alt="logoType" className="w-30" />
                        </a>

                        <p className="text-justify text-xs lg:text-sm leading-7 text-secondary-600 bg-secondary-50 p-3 rounded-2xl">
                            در تکنولند می‌توانید جدیدترین محصولات دنیای دیجیتال
                            را بررسی و مقایسه کنید. از گوشی موبایل و لپ‌تاپ گرفته
                            تا تبلت، ساعت هوشمند و لوازم جانبی؛ تلاش می‌کنیم با
                            ارائه اطلاعات دقیق و کاربردی، تجربه‌ای آسان و مطمئن
                            برای انتخاب و خرید محصولات مورد علاقه‌تان فراهم کنیم.            </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full border-b border-secondary-100 p-6 lg:w-[22%] lg:border-b-0 lg:border-l">
                        <h3 className="mb-5 text-xs font-bold text-[#1d388e]">
                            دسترسی سریع
                        </h3>

                        <div className="flex flex-col gap-2">
                            {quickLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className="group flex h-10 items-center justify-between rounded-lg bg-secondary-50 px-3 text-sm text-secondary-700 transition hover:bg-primary-50 hover:text-primary-700"
                                    >
                                        <span className="flex items-center gap-2">
                                            <Icon size={17} />
                                            {item.title}
                                        </span>

                                        <ArrowLeft
                                            size={14}
                                            className="text-secondary-500 transition group-hover:-translate-x-1 group-hover:text-blue-600"
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="w-full border-b border-secondary-100 p-6 lg:w-[32%] lg:border-b-0 lg:border-l">
                        <h3 className="mb-5 text-xs font-bold text-[#1d388e]">
                            دسته بندی
                        </h3>

                        <div className="grid grid-cols-4 gap-2">
                            {categories.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.title}
                                        href="#"
                                        className="flex min-h-12 flex-col items-center justify-center gap-1.5 rounded-xl bg-secondary-50 px-2 py-4 text-[10px] text-secondary-700 transition hover:bg-primary-50 hover:text-primary-700"
                                    >
                                        <Icon
                                            size={30}
                                            strokeWidth={1.6}
                                        />
                                        <span>{item.title}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Trust Symbols */}
                    <div className="w-full p-6 lg:w-[12%]">
                        <h3 className="mb-5 text-xs font-bold text-[#1d388e]">
                            نمادها
                        </h3>

                        <div className="flex flex-row gap-2 lg:flex-col">
                            <a
                                href="#"
                                className="flex h-12 flex-1 items-center justify-center gap-1 rounded-xl bg-secondary-50 text-[10px] text-secondary-700 transition hover:bg-primary-50"
                            >
                                <PenLine size={19} />
                                <span>دیجیتال</span>
                            </a>

                            <a
                                href="#"
                                className="flex h-12 flex-1 items-center justify-center gap-1 rounded-xl bg-secondary-50 text-[10px] text-secondary-700 transition hover:bg-primary-50"
                            >
                                <ShieldCheck size={19} />
                                <span>eNamad.ir</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col items-center justify-between gap-4 bg-[#4057bd] px-6 py-4 text-white lg:flex-row">

                    {/* Contact Information */}
                    <div className="flex flex-col items-center gap-3 text-[11px] sm:flex-row">

                        <a
                            href="#"
                            className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 transition hover:bg-white/20"
                        >
                            <MapPin size={14} />
                            <span>
                                تهران، خیابان اول، میدان دوم، کوچه سوم، پلاک ۱۰
                            </span>
                        </a>

                        <a
                            href="tel:02112345678"
                            dir="ltr"
                            className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 transition hover:bg-white/20"
                        >
                            <Phone size={14} />
                            <span>021-12345678</span>
                        </a>

                    </div>

                    {/* Social Media */}
                    <div className="flex items-center gap-2">
                        {socialLinks.map((item) => {
                            const Icon = item.icon;

                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    aria-label={item.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 transition hover:-translate-y-1 hover:bg-white/25"
                                >
                                    <Icon size={17} />
                                </a>
                            );
                        })}
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
