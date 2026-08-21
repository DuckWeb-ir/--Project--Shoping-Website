import React from 'react'
import SectionTitle from '../../../Common/SectionTitle'
import ProductCard from '../../../Common/Cards/ProductCard'

const OfferProducts = () => {
    return (
        <section className='container my-12.5'>
            <SectionTitle text="محصولات پرتخفیف" />
            <div className="mt-10 w-full border rounded-2xl grid grid-cols-5 p-4 border-neutral-300 divide-x divide-neutral-200 gap-5">
                <div className=""></div>
            </div>
        </section>
    )
}

export default OfferProducts