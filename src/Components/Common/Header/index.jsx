import React from 'react'
import logo from '../../../../public/assets/static/Logo.png'
import logoType from '../../../../public/assets/static/logoType1.png'
import { Boxes, Home, Info, LogIn, Package, Percent, Phone, Search, ShoppingBag, ShoppingCart } from 'lucide-react'
import HeaderTop from './Fragments/HeaderTop';
import HeaderNav from './Fragments/HeaderNav';

function Header() {



    return (
        <header className='bg-white  '>
            <HeaderTop />
            <HeaderNav />
        </header>
    )
}

export default Header




// <div className="container mx-auto flex items-center gap-4 px-3">

//     {/* دسته بندی */}
//     <button className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-primary-500 px-3.5 py-2 text-white">
//         <Boxes className="size-5" />
//         <span className="text-sm">دسته بندی ها</span>
//     </button>

//     <div className="h-5 w-px bg-gray-400"></div>

//     {/* Navlinks */}
//     <div className="mr-4 flex items-center gap-6">
//         {navLinks.map((link) => {
//             const Icon = link.icon;

//             return (
//                 <a
//                     key={link.href}
//                     href={link.href}
//                     className="
//             group flex items-center gap-1.5
//             text-sm font-medium text-gray-700
//             transition-colors
//             hover:text-primary-500
//         "
//                 >
//                     <Icon
//                         className="
//                 size-4
//                 transition-transform
//                 group-hover:scale-110
//             "
//                     />

//                     <span>{link.title}</span>
//                 </a>
//             );
//         })}
//     </div>
// </div>