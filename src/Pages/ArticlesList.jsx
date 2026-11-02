import React from 'react'
import SectionHeader from '../Components/Common/SectionHeader'

import HeaderImage from "../../public/assets/static/Hero/Section/ArticleHero.png"
import ArticleSideBar from '../Components/Templates/ArticlesList/ArticleSideBar'
import ArticlesSection from '../Components/Templates/ArticlesList/ArticlesSection'

function ArticlesList() {
    return (

        < div className='container mt-10' >
            <SectionHeader title={"مقالات دیجیتال"} description={" از جدیدترین فناوری‌ها تا راهنمای خرید هوشمندانه، همه اینجا جمع شده‌اند"} img={HeaderImage} />
            {/* Main */}
            <div className=" grid grid-cols-1 xl:grid-cols-15 gap-10 xl:gap-2 mt-10">
                {/* Sildebar */}
                <div className="xl:sticky xl:top-2 xl:col-span-3">
                    <ArticleSideBar />

                </div>
                {/* ArticlesSection */}
                <div className="xl:col-span-12">
                    <ArticlesSection />
                </div>
            </div>
        </div>

    )
}

export default ArticlesList