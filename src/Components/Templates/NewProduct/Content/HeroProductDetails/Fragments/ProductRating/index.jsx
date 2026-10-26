import { CircleArrowLeft, MessageSquareText, MessagesSquare, Star } from 'lucide-react'
import React from 'react'
import Button from '../../../../../../Ui/‌Btn'

function ProductRating() {
    return (
        <div className='flex justify-between items-center box-style'>
            <div className="space-y-1.5">
                <div className="font-bold text-lg text-secondary-600">امتیاز خریداران</div>
                <div className="flex items-center gap-1 ">
                    <Star className='' size={17} fill='' />
                    <span className='pt-1'>۴.۲ ( ۱۷۴ خریدار )</span>
                </div>
            </div>
            <Button
            icon={<CircleArrowLeft/>}
            iconPosition='left'
            iconHover='translate'
            size='md'
            >
                <MessagesSquare  size={20} />
                مشاهده نظرات
            </Button>

        </div>
    )
}

export default ProductRating