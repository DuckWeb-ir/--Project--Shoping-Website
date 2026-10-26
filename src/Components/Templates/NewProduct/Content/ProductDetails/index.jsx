import React, { useRef, useState } from 'react'
import ProductSpecifications from './Fragments/ProductSpecifications';
import ProductReviews from './Fragments/ProductReviews';
import ProductComments from './Fragments/ProductComments';
import ProductTabs from './Fragments/ProductTabs';
import { GitCompareArrows, MessagesSquare, PackageSearch, TableOfContents } from 'lucide-react';
import TabContent from './Fragments/TabContent';
import SimilarProducts from '../SimilarProducts';

function ProductDetails() {
    const tabs = [
        {
            id: "specs",
            label: "مشخصات محصول",
            component: ProductSpecifications,
            icon: <TableOfContents />
        },
        {
            id: "reviews",
            label: "بررسی محصول",
            component: ProductReviews,
            icon: <PackageSearch />

        },
        {
            id: "comments",
            label: "دیدگاه کاربران",
            component: ProductComments,
            icon: <MessagesSquare />


        },

        {
            id: 'similar',
            label: 'محصولات مشابه',
            component: SimilarProducts,
            icon: <GitCompareArrows />,
        }
    ];

    const [activeTab, setActiveTab] = useState('specs')

    const contentRef = useRef(null);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);

        contentRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };


    return (

        <div className=''>
            <ProductTabs tabs={tabs} activeTab={activeTab} setActiveTab={handleTabChange} />

            <div ref={contentRef} className="scroll-mt-24">
                <TabContent tabs={tabs} activeTab={activeTab} />
            </div>

        </div>
    )
}

export default ProductDetails