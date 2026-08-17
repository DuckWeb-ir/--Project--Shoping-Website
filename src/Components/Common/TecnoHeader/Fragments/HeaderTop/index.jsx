import React from 'react'
import logo from './../../../../../../public/assets/static/Logo.png'
import logoType from '../../../../../../public/assets/static/logoType1.png'
import { LogIn, Search, ShoppingCart } from 'lucide-react'

function HeaderTop() {
    return (
        <div>
            {/* Top navbar */}
            <div className="container flex items-center justify-between h-20 border-b border-b-primary-50  shadow-[0_3px_0px_rgba(0,0,0,0.10)] ">
                {/* right : Logo + Search */}
                <div className="flex items-center gap-5">
                    {/* Logo */}
                    <div className="flex items-center gap-1.5 ">
                        <img src={logo} alt="لوگوی تکنولند" className='w-15' />
                        <div className="flex flex-col items-center gap-1">
                            <img src={logoType} className='w-30' />
                            <p className='text-[11px] text-center'>مرجع محصولات دیجیتال </p>
                        </div>
                    </div>
                    {/* Searchbar */}
                    <form className="flex items-center w-110 h-11 border border-gray-300 rounded-lg bg-gray-50">
                        <button type='submit'>
                            <Search className='mr-2 cursor-pointer size-5 mr-3 text-gray-600' />
                        </button>
                        <input
                            type="text"
                            placeholder='جستجو بین هزاران برند ، محصول و دسته ...'
                            className='h-full flex-1  placeholder:pr-1 placeholder:text-xs! placeholder:text-gray-500! '
                        />

                    </form>

                </div>
                {/* Left: Cart + Auth */}
                <div className="flex items-center gap-2">

                    {/* Cart */}
                    <button
                        type="button"
                        aria-label="سبد خرید"
                        className="
            group relative
            flex size-10 items-center justify-center
            rounded-lg
            border border-gray-200
            bg-white
            text-gray-700
            transition-all duration-200
            hover:border-primary-200
            hover:bg-primary-50
            hover:text-primary-600
            active:scale-95
        "
                    >
                        <ShoppingCart
                            className="
                size-[19px]
                transition-transform duration-200
                group-hover:scale-110
            "
                        />

                        {/* Cart count */}
                        <span
                            className="
                absolute -right-1.5 -top-1.5
                flex size-[17px] items-center justify-center
                rounded-full
                bg-primary-500
                text-[10px] font-bold
                text-white
            "
                        >
                            2
                        </span>
                    </button>

                    {/* Auth */}
                    <button
                        type="button"
                        className="
            group
            flex h-10 items-center justify-center
            gap-2
            rounded-lg
            border border-gray-200
            bg-white
            px-3.5
            text-gray-700
            transition-all duration-200
            hover:border-primary-300
            hover:bg-primary-50
            hover:text-primary-600
            active:scale-[0.98]
        "
                    >
                        <LogIn className=" size-4.5 transition-transform duration-200 group-hover:translate-x-0.5" />

                        <span className="text-sm font-medium">
                            ورود | ثبت‌نام
                        </span>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default HeaderTop