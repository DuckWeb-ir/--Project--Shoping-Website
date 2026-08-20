import React from "react";

import LaptopBlue from "../../../../../public/assets/static/CategorySlider/LaptopBlue.png";
import Laptop from "../../../../../public/assets/static/CategorySlider/Laptop.png";
import SmartWatch from "../../../../../public/assets/static/CategorySlider/SmartWatch.png";
import SmartWatchBlue from "../../../../../public/assets/static/CategorySlider/SmartWatchBlue.png";
import Phone from "../../../../../public/assets/static/CategorySlider/Phone.png";
import PhoneBlue from "../../../../../public/assets/static/CategorySlider/PhoneBlue.png";
import HeadPhone from "../../../../../public/assets/static/CategorySlider/HeadPhone.png";
import HeadPhoneBlue from "../../../../../public/assets/static/CategorySlider/HeadPhoneBlue.png";
import Console from "../../../../../public/assets/static/CategorySlider/Console.png";
import ConsoleBlue from "../../../../../public/assets/static/CategorySlider/ConsoleBlue.png";
import Monitor from "../../../../../public/assets/static/CategorySlider/Monitor.png";
import MonitorBlue from "../../../../../public/assets/static/CategorySlider/MonitorBlue.png";
import VR from "../../../../../public/assets/static/CategorySlider/VR.png";
import VRBlue from "../../../../../public/assets/static/CategorySlider/VRBlue.png";
import SectionTitle from "../../../Common/SectionTitle";
import { Boxes } from "lucide-react";

function CategorySlider() {
    const categorise = [
        {
            id: 1,
            title: "ساعت هوشمند",
            subtitle: "اپل واچ، گلکسی واچ و شیائومی",
            imgBlue: SmartWatchBlue,
            img: SmartWatch,
        },
        {
            id: 2,
            title: "لپ‌تاپ",
            subtitle: "گیمینگ، اداری، دانشجویی",
            imgBlue: LaptopBlue,
            img: Laptop,
        },
        {
            id: 3,
            title: "موبایل",
            subtitle: "اقتصادی، پرچمدار",
            imgBlue: PhoneBlue,
            img: Phone,
        },
        {
            id: 4,
            title: "هدفون",
            subtitle: "سیمی و بلوتوثی",
            imgBlue: HeadPhoneBlue,
            img: HeadPhone,
        },
        {
            id: 5,
            title: "کنسول بازی",
            subtitle: "گیمینگ، بلوتوثی و استودیویی",
            imgBlue: ConsoleBlue,
            img: Console,
        },
        {
            id: 6,
            title: "واقعیت مجازی",
            subtitle: "دانشجویی، گیمینگ، طراحی",
            imgBlue: VRBlue,
            img: VR,
        },
        {
            id: 7,
            title: "مانیتور",
            subtitle: " گیمینگ ، طراحی",
            imgBlue: MonitorBlue,
            img: Monitor,
        },
    ];

    return (
        <div>
            <SectionTitle text='دسته بندی ها ' btn=' همه دسته بندی ها ' icon={<Boxes />} />

            <div className="flex items-end gap-2.5 w-full h-48 mt-3.5 px-1.5 py-1.5 bg-white rounded-3xl shadow-card-md">
                {categorise.map((category) => (
                    <div
                        key={category.id}
                        className="
                        group
                        relative
                        w-48
                        h-1/2
                        rounded-2xl
                        bg-secondary-100
                        cursor-pointer

                        transition-transform
                        duration-500
                        ease-out

                        hover:-translate-y-2
                        hover:scale-[1.03]

                        hover:shadow-lg
                    "
                    >
                        {/* Images */}
                        <div className="absolute left-1/2 bottom-16 -translate-x-1/2">

                            {/* Blue Image */}
                            <img
                                src={category.imgBlue}
                                alt={category.title}
                                className="
                                max-w-45
                                max-h-32

                                transition-all
                                duration-500
                                ease-out

                                opacity-100
                                scale-100

                                group-hover:opacity-0
                                group-hover:scale-110
                            "
                            />

                            {/* Normal Image */}
                            <img
                                src={category.img}
                                alt={category.title}
                                className="
                                absolute
                                inset-0
                                max-w-45
                                max-h-32

                                transition-all
                                duration-500
                                ease-out

                                opacity-0
                                scale-90

                                group-hover:opacity-100
                                group-hover:scale-110
                            "
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-center justify-center gap-1 pt-5 h-full text-center ">
                            <div className="text-lg font-bold">
                                {category.title}
                            </div>

                            <div className="text-xs">
                                {category.subtitle}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CategorySlider;