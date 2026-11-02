
import React from 'react'
import ArticleCard from '../../../../../Common/Cards/ArticleCard/index'

function ArticleGrid() {

    const articles = [
        {
            id: 1,
            image: "https://storage.sabzlearn.ir/app/static/articles/covers/scratch-vs-python-for-kids.webp",
            title: "معرفی گوشی سامسونگ Galaxy Z Fold 6؛ بررسی کامل مشخصات و امکانات",
            description: "در این مقاله به بررسی کامل گوشی سامسونگ گلکسی زد فولد ۶، طراحی، دوربین، عملکرد و قابلیت‌های جذاب آن می‌پردازیم.",
            category: "بررسی موبایل",
            author: "تیم تحریریه تکنولند",
            date: "۱۴۰۵/۰۸/۱۰",
            view: "۱۴۵۲ بازدید",
        },
        {
            id: 2,
            image: "https://storage.sabzlearn.ir/app/static/articles/covers/python-game-development.webp",
            title: "راهنمای خرید بهترین گوشی موبایل در سال ۱۴۰۵",
            description: "اگر قصد خرید گوشی جدید دارید، در این راهنما بهترین گزینه‌ها را از نظر قیمت، کیفیت و امکانات بررسی می‌کنیم.",
            category: "راهنمای خرید",
            author: "تیم تحریریه تکنولند",
            date: "۱۴۰۵/۰۸/۰۸",
            readTime: "۸ دقیقه",
        },
        {
            id: 3,
            image: "https://storage.sabzlearn.ir/app/static/articles/covers/best-programming-books.webp",
            title: "تفاوت گوشی‌های تاشو سامسونگ با گوشی‌های معمولی چیست؟",
            description: "نگاهی به مزایا، معایب و تفاوت‌های اصلی گوشی‌های تاشو با موبایل‌های هوشمند معمولی.",
            category: "تکنولوژی",
            author: "تیم تحریریه تکنولند",
            date: "۱۴۰۵/۰۸/۰۵",
            readTime: "۶ دقیقه",
        },
        {
            id: 4,
            image: "https://dkstatics-public.digikala.com/digikala-products/1060226be85a56b7d464bf1306da65a0b89a57c2_1661346596.jpg",
            title: "چگونه از باتری گوشی هوشمند خود بهتر نگهداری کنیم؟",
            description: "با رعایت چند نکته ساده می‌توانید عمر باتری گوشی خود را افزایش دهید و عملکرد بهتری از آن دریافت کنید.",
            category: "آموزش",
            author: "تیم تحریریه تکنولند",
            date: "۱۴۰۵/۰۸/۰۲",
            readTime: "۴ دقیقه",
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
            {articles.map(article => (
                <ArticleCard
                    key={article.id}
                    article={article}
                />
            ))}
        </div>
    )
}

export default ArticleGrid
