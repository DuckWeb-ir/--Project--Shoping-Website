import { Boxes, Feather } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../../../../Ui/‌Btn';

const articleCategories = [
    { id: 1, title: "همه مقالات", slug: "all" },
    { id: 2, title: "اخبار تکنولوژی", slug: "technology-news" },
    { id: 3, title: "بررسی تخصصی محصولات", slug: "product-reviews" },
    { id: 4, title: "راهنمای خرید", slug: "buying-guide" },
    { id: 5, title: "مقایسه محصولات", slug: "product-comparison" },
    { id: 6, title: "آموزش و ترفندها", slug: "tutorials-tips" },
    { id: 7, title: "موبایل و تبلت", slug: "mobile-tablet" },
    { id: 8, title: "لپ‌تاپ و کامپیوتر", slug: "laptop-computer" },
    { id: 9, title: "لوازم جانبی", slug: "accessories" },
    { id: 10, title: "هوش مصنوعی", slug: "artificial-intelligence" },
];

function ArticleCategory(onCategoryChange) {


    const [activeArticle, setActiveArticle] = useState('all')

    const handleCategoryChange = (slug) => {
        setActiveArticle(slug)
        onCategoryChange?.(slug)
    }

    return (
        <div className='box-style'>
            {/* Header */}
            <div className="flex items-center gap-2 font-bold border-b border-secondary-200 pb-5">
                <Boxes className='text-primary-600' />
                <p>دسته بندی مقالات </p>
            </div>

            {/* article Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2 mt-2">
                {articleCategories.map((category) => (
                    <Button
                        key={category.id}
                        className="justify-start"
                        icon={<Feather size={15} />}
                        variant={category.slug === activeArticle ? 'primary' : 'secondary'}
                        onClick={() => handleCategoryChange(category.slug)}
                    >
                        {category.title}
                    </Button>
                )
                )}
            </div>

        </div>
    )
}

export default ArticleCategory