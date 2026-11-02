
import { ChevronDown, Funnel } from 'lucide-react'
import React from 'react'

function FilterSideBar() {

    const brands = [
        "سامسونگ",
        "اپل",
        "شیائومی",
        "هواوی",
    ]

    return (
        <aside className="box-style h-fit p-5">

            {/* Header */}
            <div className="flex items-center gap-2 border-b border-secondary-200 pb-5">
                <Funnel size={20} className="text-primary-500" />
                <h3 className="font-bold text-gray-800">
                    فیلتر محصولات
                </h3>
            </div>

            {/* Filters */}
            <div className="mt-2">

                {/* Brand Filter */}
                <div className="border-b border-secondary-200 pb-5">

                    <div className="flex items-center justify-between py-4 cursor-pointer">
                        <h4 className="font-bold text-gray-700">
                            برند
                        </h4>

                        <ChevronDown
                            size={20}
                            className="text-secondary-500 transition-transform"
                        />
                    </div>

                    <div className="space-y-3 px-3">
                        {brands.map((brand, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-primary-500 transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    className="size-4 accent-primary-500 cursor-pointer"
                                />

                                <span>{brand}</span>
                            </label>
                        ))}
                    </div>

                </div>
                {/* Brand Filter */}
                <div className="border-b border-secondary-200 pb-5">

                    <div className="flex items-center justify-between py-4 cursor-pointer">
                        <h4 className="font-bold text-gray-700">
                            برند
                        </h4>

                        <ChevronDown
                            size={20}
                            className="text-gray-500 transition-transform"
                        />
                    </div>

                    <div className="space-y-3">
                        {brands.map((brand, index) => (
                            <label
                                key={index}
                                className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 hover:text-primary-500 transition-colors"
                            >
                                <input
                                    type="checkbox"
                                    className="size-4 accent-primary-500 cursor-pointer"
                                />

                                <span>{brand}</span>
                            </label>
                        ))}
                    </div>

                </div>

            </div>

        </aside>
    )
}

export default FilterSideBar
