import React from 'react'
import SectionHeader from '../Components/Common/SectionHeader'

import HeaderImage from "../../public/assets/static/Hero/Section/ArticleHero.png"

function ArticlesList() {
    return (

        < div className='container mt-10' >
            <SectionHeader title={"مقالات دیجیتال"} description={" از جدیدترین فناوری‌ها تا راهنمای خرید هوشمندانه، همه اینجا جمع شده‌اند"} img={HeaderImage} />
            {/* Main */}
            <div className="grid grid-cols-15 gap-2 mt-10">
                {/* Sildebar */}
                <div className="col-span-3">
                    <ArticleSideBar />

                </div>
                {/* ProductSection */}
                <div className="col-span-12">
                    <ProductSection />
                </div>
            </div>
        </div>

    )
}

export default ArticlesList