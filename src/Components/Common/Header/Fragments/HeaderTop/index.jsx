import React, { useContext } from 'react'
import logo from './../../../../../../public/assets/static/Logo.png'
import logoType from '../../../../../../public/assets/static/logoType1.png'
import { Link, Loader, LogIn, Search, ShoppingCart, UserRound } from 'lucide-react'
import Button from '../../../../Ui/‌Btn'
import AuthContext from '../../../../../context/authContext'

function HeaderTop() {
    const { user, isLoading } = useContext(AuthContext)

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
                    <Button icon={<ShoppingCart />} variant='outline' className='relative'>
                        {/* Cart count */}
                        <span className=" absolute -right-1.5 -top-1.5 flex size-4.5 items-center justify-center rounded-full bg-primary-500 text-[10px] font-bold text-white leading-none pt-0.5"     >
                            2
                        </span>
                    </Button>


                    {/* Auth */}
                    <Button
                        to={isLoading ? undefined : user ? "/profile" : "/auth"}
                        icon={isLoading ? <Loader className="animate-spin" /> : user ? <UserRound /> : <LogIn />}
                        iconHover={user ? 'scale' : "translate"}
                        variant='outline'

                    >
                        {isLoading
                            ? "در حال بارگذاری ..."
                            : user
                                ? "پنل کاربری"
                                : "ورود | ثبت نام"
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop