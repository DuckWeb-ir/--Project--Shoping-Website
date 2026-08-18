import React from 'react'

function BenefitsBar() {

    const features = [
        {
            icon: "truck",
            title: "ارسال سریع",
            description: "ارسال سریع به سراسر ایران"
        },
        {
            icon: "award",
            title: "اصالت کالا",
            description: "ضمانت اصالت محصولات"
        },
        {
            icon: "shield",
            title: "گارانتی معتبر",
            description: "18 ماه گارانتی معتبر"
        },
        {
            icon: "lock",
            title: "پرداخت امن",
            description: "درگاه پرداخت مطمئن"
        },
        {
            icon: "headphones",
            title: "پشتیبانی تخصصی",
            description: "پاسخگویی 24 ساعته"
        }
    ];

    return (
        <div className='w-full bg-primary-50 rounded-2xl h-25'>

            {features.map((feature, index) => {

                <div className="bg-amber-300 w-10 h-10"> gh</div>

            })}
            
        </div>
    )
}

export default BenefitsBar