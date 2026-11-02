import React from 'react'
import { Clock, Eye, Feather, MousePointer2, User } from 'lucide-react'
import Button from '../../../Ui/‌Btn'

function ArticleCard({ article }) {
    return (
        <article className="group overflow-hidden    bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl shadow-card-md border border-secondary-200/80">

            {/* Image */}
            <div className="relative h-55 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-5 right-5 rounded-md bg-primary-50 px-3 py-1 text-xs font-medium text-primary-600">
                    {article.category}
                </span>
            </div>

            {/* Content */}
            <div className="space-y-3 p-4">


                <h3 className="flex gap-2  line-clamp-2 min-h-14 text-sm font-bold leading-7 text-gray-800">
                    <div className="text-primary-600">
                        <Feather />
                    </div>
                    {article.title}
                </h3>

                <p className="line-clamp-2 text-xs leading-6 text-gray-500">
                    {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between gap-2 border-t border-secondary-200 pt-3 text-xs text-gray-400">
                    <Button
                        icon={<MousePointer2 />}
                        iconPosition='left'
                        iconSize={"md"}

                    >
                        مطالعه
                    </Button>


                    <div className="flex flex-wrap gap-1 items-end ">
                        <Eye size={17} className='text-primary-600' />
                        <span>{article.view}</span>

                        <p className="flex gap-1 text-xs text-gray-400">
                            <Clock size={14} className='text-primary-600' />
                            {article.date}
                        </p>
                    </div>

                </div>


            </div>
        </article>
    )
}

export default ArticleCard