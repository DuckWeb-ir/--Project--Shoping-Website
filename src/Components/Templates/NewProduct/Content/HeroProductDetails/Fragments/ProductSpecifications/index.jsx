
import { CircleArrowLeft } from 'lucide-react'
import React from 'react'
import Button from '../../../../../../Ui/‌Btn'

function ProductSpecifications() {
    const specifications = [
        {
            label: "نوع پردازنده",
            value: "Qualcomm Snapdragon 8",
        },
        {
            label: "حافظه داخلی",
            value: "۲۵۶ گیگابایت",
        },
        {
            label: "حافظه RAM",
            value: "۱۲ گیگابایت",
        },
        {
            label: "صفحه نمایش",
            value: "۶.۹ اینچ",
        },
        {
            label: "دوربین پشت",
            value: "چهارگانه ۲۰۰ + ۵۰ + ۵۰ + ۱۰ مگاپیکسل",
        },
        {
            label: "ظرفیت باتری",
            value: "۵۰۰۰ میلی‌آمپر ساعت",
        },
    ];
    return (
        <div className='box-style'>
            <div className='flex justify-between  '>
                <div className="space-y-1.5">
                    <div className="font-bold text-lg text-secondary-600">ویژگی ها </div>
                </div>
                <Button
                    icon={<CircleArrowLeft />}
                    iconPosition='left'
                    iconHover='translate'
                    size='md'
                >
                    
مشاهده همه ویژگی‌ها

                </Button>

            </div>
            <div className="">
                {/* Rows */}
                <div>
                    {specifications.map((item) => (
                        <div
                            key={item.label}
                            className="grid grid-cols-[minmax(100px,0.8fr)_minmax(0,1.5fr)] items-center gap-3 border-b border-gray-100 py-4 last:border-b-0"
                        >
                            <span className="text-sm text-gray-400">
                                {item.label}
                            </span>

                            <span className="text-sm font-medium leading-6 text-gray-800">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductSpecifications