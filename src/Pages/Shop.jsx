import React from 'react'
import SectionHeader from '../Components/Common/SectionHeader'

import Image from '../../public/assets/static/Hero/Section/ShopHero.png'
import FilterSideBar from '../Components/Templates/Shop/FilterSideBar'
import ProductSection from '../Components/Templates/Shop/ProductSection'


function Shop() {
    return (
        <div className="container my-10">
            <SectionHeader title="دنیای دیجیتال" description={"جدیدترین محصولات تکنولوژی، انتخابی هوشمندانه برای خریدی مطمئن "} img={Image} />

            {/* Main */}
            <div className="grid grid-cols-15 gap-2 mt-10">
                {/* Sildebar */}
                <div className="col-span-3">
                    <FilterSideBar />

                </div>
                {/* ProductSection */}
                <div className="col-span-12">
                    <ProductSection />
                </div>
            </div>

        </div>
    )
}

export default Shop