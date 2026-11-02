import React from 'react'
import ProductToolbar from './Fragments/ProductToolbar'
import ProductGrid from './Fragments/ProductGrid'

function ProductSection() {
    return (
        <div className='space-y-2'>
            <ProductToolbar />
            <ProductGrid/>
        </div>
    )
}

export default ProductSection