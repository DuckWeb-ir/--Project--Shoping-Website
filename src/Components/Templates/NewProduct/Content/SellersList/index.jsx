import React from 'react'
import SectionTitle from '../../../../Common/SectionTitle'
import { ShieldCheck, ShoppingBag, ShoppingCart, TruckElectric } from 'lucide-react'
import Button from '../../../../Ui/‌Btn'

function SellersList() {
    return (
        <>

            <SectionTitle text={'همه فروشندگان '} />

            <div className=" box-style space-y-2">

                <div className="box-style grid grid-cols-1 gap-5 p-4 font-bold sm:grid-cols-2 lg:grid-cols-5 lg:items-center lg:gap-4 lg:p-6">

                    {/* Shop name */}
                    <div className="flex min-w-0 items-center gap-3">
                        <ShoppingBag className="shrink-0" />

                        <div className="min-w-0 space-y-1.5">
                            <h2>ستیا همراه</h2>
                            <p className="text-xs text-secondary-400">
                                <span className="pl-2">ارزیابی عملکرد:</span>
                                <span className="text-green-400">عالی</span>
                            </p>
                        </div>
                    </div>
                    {/* Delivery */}
                    <div className="flex min-w-0 items-center gap-3">
                        <TruckElectric className="shrink-0" />

                        <div className="min-w-0 space-y-1.5">
                            <h2>ارسال فوری</h2>
                            <p className="text-xs text-secondary-400">
                                <p className="text-xs text-secondary-400">
                                    موجود در انبار تکنولند
                                </p>
                            </p>
                        </div>
                    </div>


                    {/* Guarantee */}
                    <div className="flex min-w-0 items-center gap-3">
                        <ShieldCheck size={22} className="shrink-0" />
                        <h2 className="text-sm leading-6">
                            دارای ۱۸ ماه گارانتی شرکتی
                        </h2>
                    </div>

                    {/* Price */}
                    <div className="min-w-0 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-medium text-gray-400 line-through">
                                ۹۶,۰۰۰,۰۰۰ تومان
                            </span>

                            <span className="rounded-full bg-red-600 px-2 py-1 text-xs text-white">
                                ۲٪ تخفیف
                            </span>
                        </div>

                        <div className="text-lg font-extrabold tracking-tight text-gray-900">
                            ۸۶,۵۰۰,۰۰۰ تومان
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="w-full sm:col-span-2 lg:col-span-1">
                        <Button
                            icon={<ShoppingCart />}
                            size="xl"
                        >
                            افزودن به سبد خرید
                        </Button>
                    </div>

                </div>
                <div className="box-style grid grid-cols-1 gap-5 p-4 font-bold sm:grid-cols-2 lg:grid-cols-5 lg:items-center lg:gap-4 lg:p-6">

                    {/* Shop name */}
                    <div className="flex min-w-0 items-center gap-3">
                        <ShoppingBag className="shrink-0" />

                        <div className="min-w-0 space-y-1.5">
                            <h2>ستیا همراه</h2>
                            <p className="text-xs text-secondary-400">
                                <span className="pl-2">ارزیابی عملکرد:</span>
                                <span className="text-green-400">عالی</span>
                            </p>
                        </div>
                    </div>
                    {/* Delivery */}
                    <div className="flex min-w-0 items-center gap-3">
                        <TruckElectric className="shrink-0" />

                        <div className="min-w-0 space-y-1.5">
                            <h2>ارسال فوری</h2>
                            <p className="text-xs text-secondary-400">
                                <p className="text-xs text-secondary-400">
                                    موجود در انبار تکنولند
                                </p>
                            </p>
                        </div>
                    </div>


                    {/* Guarantee */}
                    <div className="flex min-w-0 items-center gap-2">
                        <ShieldCheck size={22} className="shrink-0" />
                        <h2 className="text-sm leading-6">
                            دارای ۱۸ ماه گارانتی شرکتی
                        </h2>
                    </div>

                    {/* Price */}
                    <div className="min-w-0 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-medium text-gray-400 line-through">
                                ۹۶,۰۰۰,۰۰۰ تومان
                            </span>

                            <span className="rounded-full bg-red-600 px-2 py-1 text-xs text-white">
                                ۲٪ تخفیف
                            </span>
                        </div>

                        <div className="text-lg font-extrabold tracking-tight text-gray-900">
                            ۸۶,۵۰۰,۰۰۰ تومان
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="w-full sm:col-span-2 lg:col-span-1">
                        <Button
                            icon={<ShoppingCart />}
                            size="xl"
                        >
                            افزودن به سبد خرید
                        </Button>
                    </div>

                </div>



            </div>


        </>
    )
}

export default SellersList