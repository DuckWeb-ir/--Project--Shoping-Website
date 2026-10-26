import React from 'react'
import Button from '../../../../../../Ui/‌Btn'

function ProductColor() {
    return (

        <div className='flex justify-between items-center box-style'>
            <div className="space-y-1.5">
                <div className="font-bold text-lg text-secondary-600">رنگ انتخاب شده :</div>

                <span className='pt-1 font-bold'>مشکی</span>
            </div>
            <Button
                iconPosition='left'
                iconHover='translate'
                size='md'
            >
                مشاهده نظرات
            </Button>

        </div>




    )
}

export default ProductColor