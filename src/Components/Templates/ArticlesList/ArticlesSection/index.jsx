import React from 'react'
import ArticleToolbar from './Fragments/ArticleToolbar'
import ArticleGrid from './Fragments/ArticleGrid'

function ArticlesSection() {
    return (
        <div className='space-y-2'>
            <ArticleToolbar/>
            <ArticleGrid/>
        </div>
    )
}

export default ArticlesSection