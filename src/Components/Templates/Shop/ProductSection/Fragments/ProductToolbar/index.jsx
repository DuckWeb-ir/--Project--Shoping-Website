import { ArrowDownWideNarrow, ChevronDown } from 'lucide-react'
import React from 'react'

function ProductToolbar() {
    return (
        <div>
            <div className="flex flex-wrap  justify-between items-center gap-2 box-style py-2.5 ">
                {/* Product Count */}
                <p className="text-sm text-gray-600">
                    نمایش <span className="font-bold text-gray-800">۱۲</span> محصول از <span className="font-bold text-gray-800">۳۶۵</span> محصول
                </p>

                {/* Sorting */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <ArrowDownWideNarrow size={18} />
                        <span>مرتب‌سازی:</span>
                    </div>
                    <div className="relative">
                        <select
                            name="sort"
                            defaultValue="newest"
                            className="
                            appearance-none
                            min-w-40
                            cursor-pointer
                            rounded-lg
                            border border-secondary-200
                            bg-gray-50
                            py-2.5 pr-4 pl-10
                            text-sm font-medium text-gray-700
                            outline-none
                            transition-all duration-200
                            hover:border-primary-400 hover:bg-white
                        "
                        >
                            <option value="newest">جدیدترین</option>
                            <option value="cheapest">ارزان‌ترین</option>
                            <option value="expensive">گران‌ترین</option>
                            <option value="popular">محبوب‌ترین</option>
                        </select>

                        <ChevronDown
                            size={17}
                            className="
                            pointer-events-none
                            absolute left-3 top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductToolbar