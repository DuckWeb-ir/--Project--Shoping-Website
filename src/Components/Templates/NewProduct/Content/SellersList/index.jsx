import React from 'react'
import SectionTitle from '../../../../Common/SectionTitle'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
import Button from '../../../../Ui/‌Btn'

function SellersList() {
    return (
        <>
        
            <SectionTitle text={'همه فروشندگان '} />

            <div className=" box-style space-y-2">

            <div className='flex justify-around items-center box-style *:px-10  font-bold text-md '>
                {/* name */}
                <div className='flex items-center gap-3 flex-1  ' >
                    <ShoppingBag />
                    <div className="space-y-1.5">
                        <h2>ستیا همراه</h2>
                        <p className=' text-xs text-secondary-400'>
                            <span className=' pl-2'>ارزیابی عملکرد :</span>
                            <span className=' text-xs text-green-400'>عالی </span>
                        </p>
                    </div>
                </div>
                <div className='space-y-1.5 flex-1 ' >
                    <h2 >ارسال فوری</h2>
                    <p className=' text-xs text-secondary-400'> موجود در انبار تکنولند </p>
                </div>
                <div className='flex-1' >
                    <div className="flex flex-col    gap-2 ">

                        <div className="flex gap-2 items-end leading-none">
                            {/* Old price */}
                            <div className="relative mb-1 text-xs font-medium text-gray-400">
                                <span className="line-through">
                                    ۹۶,۰۰۰,۰۰۰ تومان
                                </span>
                            </div>
                            {/* Discount badge */}
                            <div className="rounded-full bg-red-600 px-1.5 py-1 text-xs  text-white shadow-sm">
                                ۲٪ تخفیف
                            </div>

                        </div>
                        {/* New price */}
                        <div className=" font-extrabold tracking-tight text-gray-900">
                            ۸۶,۵۰۰,۰۰۰ تومان
                        </div>
                    </div>
                </div>
                <div className='flex flex-centerflex-1 ' >
                    <Button
                        icon={<ShoppingCart />}
                        size='xl'
                    >
                        افزودن به سبد خرید
                    </Button>
                </div>
            </div>
            <div className='flex justify-around items-center box-style *:px-10  font-bold text-md'>
                {/* name */}
                <div className='flex items-center gap-3 flex-1  ' >
                    <ShoppingBag />
                    <div className="space-y-1.5">
                        <h2>ستیا همراه</h2>
                        <p className=' text-xs text-secondary-400'>
                            <span className=' pl-2'>ارزیابی عملکرد :</span>
                            <span className=' text-xs text-green-400'>عالی </span>
                        </p>
                    </div>
                </div>
                <div className='space-y-1.5 flex-1 ' >
                    <h2 >ارسال فوری</h2>
                    <p className=' text-xs text-secondary-400'> موجود در انبار تکنولند </p>
                </div>
                <div className='flex-1' >
                    <div className="flex flex-col    gap-2 ">

                        <div className="flex gap-2 items-end leading-none">
                            {/* Old price */}
                            <div className="relative mb-1 text-xs font-medium text-gray-400">
                                <span className="line-through">
                                    ۹۶,۰۰۰,۰۰۰ تومان
                                </span>
                            </div>
                            {/* Discount badge */}
                            <div className="rounded-full bg-red-600 px-1.5 py-1 text-xs  text-white shadow-sm">
                                ۲٪ تخفیف
                            </div>

                        </div>
                        {/* New price */}
                        <div className=" font-extrabold tracking-tight text-gray-900">
                            ۸۶,۵۰۰,۰۰۰ تومان
                        </div>
                    </div>
                </div>
                <div className='flex flex-centerflex-1 ' >
                    <Button
                        icon={<ShoppingCart />}
                        size='xl'
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