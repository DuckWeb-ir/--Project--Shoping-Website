import React from 'react'
import MainProductImage from './Fragments/MainProductImage'
import Image1 from '../../../../../../../../public/assets/static/ProductGalleryImage/1.jpg'
import Image2 from '../../../../../../../../public/assets/static/ProductGalleryImage/2.webp'
import Image3 from '../../../../../../../../public/assets/static/ProductGalleryImage/3.webp'
import Image4 from '../../../../../../../../public/assets/static/ProductGalleryImage/4.webp'
import Image5 from '../../../../../../../../public/assets/static/ProductGalleryImage/5.webp'
function ProductGallery() {

    return (
        <div>
            <MainProductImage image = {Image2} />

            <div className="flex gap-2 mt-5">
                <div className="max-w-30 min-h-30 box-style cursor-pointer"></div>
                <div className="max-w-30 min-h-30 box-style cursor-pointer"></div>
                <div className="max-w-30 min-h-30 box-style cursor-pointer"></div>
           
            </div>
        </div>
    )
}

export default ProductGallery