import { Boxes, Home, Info, Layers, Package, Percent, Phone, ShoppingBag , BookText } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router';

function HeaderNav() {
    const navLinks = [
        {
            title: "صفحه اصلی",
            href: "/",
            icon: Home,
        },
        {
            title: "فروشگاه",
            href: "/shop",
            icon: ShoppingBag,
        },
        {
            title: "تخفیف‌ها",
            href: "/discounts",
            icon: Percent,
        },
        {
            title: "مقالات",
            href: "/articles",
            icon: BookText ,
        },
        {
            title: "درباره ما",
            href: "/about-us",
            icon: Info,
        },
        {
            title: "تماس با ما",
            href: "/contact-us",
            icon: Phone,
        },
    ];
    return (
        <div>
            <div dir="rtl" className="relative z-10">
                <nav
                    className=" mx-auto h-14 w-[85%] border-b border-gray-200 bg-white "
                >
                    <div className="container mx-auto flex h-full items-center px-3">

                        {/* Category CTA */}
                        <button
                            type="button"
                            className="
                                           group
                                           flex h-10 items-center
                                           gap-2
                                           rounded-lg
                                           bg-primary-50
                                           px-4
                                           text-sm font-semibold
                                           text-primary-600
                                           transition-all duration-200
                                           hover:bg-primary-100
                                                 "
                        >
                            <Layers
                                className="
                                    size-4.5
                                    transition-transform
                                    group-hover:scale-110
                            "
                            />

                            <span>دسته‌بندی کالاها</span>
                        </button>

                        {/* Divider */}
                        <div className="mx-5 h-6 w-px bg-gray-200" />

                        {/* Links */}
                        <div className="flex h-full items-center gap-7">
                            {navLinks.map((link) => {
                                const Icon = link.icon;

                                return (
                                    <NavLink
                                        key={link.href}
                                        to={link.href}
                                        className={({ isActive }) => `
                                        group relative
                                        flex h-full items-center
                                        gap-1.5
                                        whitespace-nowrap
                                        text-sm font-medium
                                        transition-colors

                                        after:absolute
                                        after:bottom-0
                                        after:right-0
                                        after:h-0.5
                                        after:bg-primary-500
                                        after:transition-all

                                        ${isActive
                                                ? "text-primary-600 after:w-full"
                                                : "text-gray-600 after:w-0 hover:text-primary-600 group-hover:after:w-full"
                                            }
                                    `}
                                    >
                                        <Icon
                                            className="
                                            size-[17px]
                                            transition-colors
                                            group-hover:text-primary-500
                                        "
                                        />

                                        <span>{link.title}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default HeaderNav