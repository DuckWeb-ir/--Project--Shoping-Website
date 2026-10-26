import React from 'react'
import Content from '../../Content/index'
import SideBar from '../../SideBar/index'
import ProductTitle from './Fragments/ProductTitle'
import ProductRating from './Fragments/ProductRating'
import ProductColor from './Fragments/ProductColor'
import ProductSpecifications from './Fragments/ProductSpecifications'
import ProductGallery from './Fragments/ProductGallery'
import Breadcrumbs from '../../../../Common/Breadcrumbs'


function HeroProductDetails() {
    return (
        <section className="my-4">
            <Breadcrumbs />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start mt-4">

                {/* گالری تصاویر */}
                <div className="box-style lg:col-span-4">
                    <ProductGallery />
                </div>

                {/* اطلاعات محصول */}
                <div className="lg:col-span-8 space-y-4">
                    <div className="box-style">
                        <ProductTitle />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">

                        {/* توضیحات و مشخصات */}
                        <div className="md:col-span-3 space-y-4">
                            <ProductRating/>
                            <ProductColor />
                            <ProductSpecifications className="box-style min-h-120" />
                        </div>

                        {/* پنل فروشنده */}
                        <aside className="box-style md:col-span-2 md:sticky md:top-4">
                            <SideBar />
                        </aside>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroProductDetails
