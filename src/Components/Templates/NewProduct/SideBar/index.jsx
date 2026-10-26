import { ChevronLeft, Heart, MemoryStick, MessagesSquare, Palette, Scale, Share2, ShieldCheck, ShoppingBag, ShoppingCart, Sparkles, Truck } from 'lucide-react'
import React from 'react'
import Button from '../../../Ui/‌Btn'

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
            <div className=" p-4 bg-secondary-50 rounded-md gap-1.5 ">
                <div className="flex gap-3">
                    {/* icon */}
                    <ShoppingBag />
                    <div className="w-full flex flex-col">
                        {/* shop name */}
                        <div className="w-full  flex justify-between items-center mb-2 leading-none">
                            <div className="flex items-center gap-2 font-bold">
                                <h3>فروشنده :</h3>
                                <h3 className=" text-lg">شاپینو</h3>
                            </div>
                            <div className="flex-center gap-0.5 text-xs text-primary-500 cursor-pointer  ">
                                <p>همه فروشندگان (۲)</p>
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




            {/* price */}
            <div className="flex flex-col items-end  gap-2 ">

                <div className="flex gap-2 items-end leading-none">
                    {/* Old price */}
                    <div className="relative mb-1 text-sm font-medium text-gray-400">
                        <span className="line-through">
                            ۹۶,۰۰۰,۰۰۰ تومان
                        </span>
                    </div>
                    {/* Discount badge */}
                    <div className="rounded-full bg-red-600 px-3 py-1 text-sm font-bold text-white shadow-sm">
                        ۲٪ تخفیف
                    </div>

                </div>
                {/* New price */}
                <div className="text-2xl font-extrabold tracking-tight text-gray-900">
                    ۸۶,۵۰۰,۰۰۰ تومان
                </div>
            </div>

            {/*add to cart btn */}

            <Button
                icon={<ShoppingCart />}
                variant='dark'
                size='xl'
                className="my-3 py-7"
            >
                افزودن به سبد خرید
            </Button>


        </div>
    )
}

export default SideBar