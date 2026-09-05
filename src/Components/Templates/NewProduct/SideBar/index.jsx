import { ChevronLeft, Heart, MessagesSquare, Palette, Scale, Share2, ShieldCheck, ShoppingBag, Sparkles, Truck } from 'lucide-react'
import React from 'react'

function SideBar() {
    return (
        <div className='flex flex-col gap-5'>
            {/* Action btn */}
            <div className=" flex gap-2.5 pb-4 border-b border-b-secondary-200 *:cursor-pointer *:transition *:duration-200 *:hover:scale-110 *:hover:text-primary-500">
                <Share2 />
                <MessagesSquare />
                <Heart />
                <Scale />
            </div>
            {/* seller info */}
            <div className=" p-4 bg-primary-50 rounded-md gap-1.5 ">
                <div className="flex gap-3">
                    {/* icon */}
                    <ShoppingBag />
                    <div className="w-full flex flex-col">
                        {/* shop name */}
                        <div className="w-full flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 font-bold">
                                <h3>فروشنده :</h3>
                                <h3 className=" text-lg">شاپینو</h3>
                            </div>
                            <div className="flex-center gap-1 text-xs text-primary-500 cursor-pointer  ">
                                <p>مشاهده ۱ فروشنده دیگر</p>
                                <ChevronLeft size={15} />
                            </div>
                        </div>
                        {/* shop description */}
                        <div className="flex gap-2 text-sm border-t border-t-secondary-200 py-3">
                            <Truck size={20} />
                            <p>موجود در انبار تکنولند ( ارسال فوری )</p>
                        </div>
                        <div className="flex gap-2 text-sm border-t border-t-secondary-200 py-3">
                            <Sparkles size={20} />
                            <p>ارزیابی عملکرد فروشنده : </p>
                            <p className="text-green-500">عالی</p>
                        </div>
                        <div className="flex gap-2 text-sm border-t border-t-secondary-200 py-3">
                            <ShieldCheck size={20} />
                            <p>۱۸ ماه گارانتی شرکتی</p>
                        </div>

                    </div>

                </div>
            </div>
            {/* color */}

            <div className="flex gap-3">
                {/* icon */}
                <Palette />
                <div className="w-full flex flex-col">
                    {/* shop name */}
                    <div className="w-full flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 font-bold">
                            <h3>رنگ :</h3>
                            <h3 className=" text-lg">تیتانیوم</h3>
                        </div>

                    </div>
                    {/* color options */}
                    <div className="flex gap-2 border-t border-t-secondary-200 py-3">
                        {/* Black Titanium - Active */}
                        <div className="size-7 cursor-pointer rounded-full border-3 border-gray-100 bg-[#1D1D1F] ring-2 ring-primary-500"></div>

                        {/* Natural Titanium */}
                        <div className="size-7 cursor-pointer rounded-full border-3 border-gray-100 bg-[#B8B8B0]"></div>

                        {/* Desert / Bronze Titanium */}
                        <div className="size-7 cursor-pointer rounded-full border-3 border-gray-100 bg-[#BFA58A]"></div>

                        {/* Blue Titanium */}
                        <div className="size-7 cursor-pointer rounded-full border-3 border-gray-100 bg-[#394B5A]"></div>

                        {/* Gold / Bronze */}
                        <div className="size-7 cursor-pointer rounded-full border-3 border-gray-100 bg-[#A88B68]"></div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default SideBar