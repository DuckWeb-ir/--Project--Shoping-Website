import React from 'react'
import MiniProductCart from '../../../../../Common/Cards/ProductCard/MiniProductCart'

function ProductGrid() {

    const products = [
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیتگوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیتگوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیتگوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیتگوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیتگوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/1060226be85a56b7d464bf1306da65a0b89a57c2_1661346596.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },
        {
            id: 1,
            image: "https://dkstatics-public.digikala.com/digikala-products/bd76c274fd444bdf8146bb476a3dc734e147e877_1752267081.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
            englishTitle: "Samsung Galaxy Z Fold 6",
            title: "گوشی موبایل سامسونگ مدل Galaxy Z Fold 6 ظرفیت 256/12",
            rating: 4.3,
            reviews: 55,
            colors: ["#f8f8f8", "#17152e"],
            oldPrice: 135999000,
            price: 128756000,
            discount: 5,
        },

    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map(product => (
                <MiniProductCart
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}

export default ProductGrid