import React from 'react'
import { TruckElectric, Award, ShieldCheck, Lock, Headset } from "lucide-react";
function BenefitsBar() {

    const features = [
        {
            icon: Headset,
            title: "پشتیبانی تخصصی",
            description: "پاسخگویی 24 ساعته"
        },
        {
            icon: TruckElectric,
            title: "ارسال سریع",
            description: "ارسال سریع به سراسر ایران"
        },
        {
            icon: Award,
            title: "اصالت کالا",
            description: "ضمانت اصالت و کیفیت"
        },
        {
            icon: Lock,
            title: "پرداخت امن",
            description: "درگاه پرداخت مطمئن"
        },
        {
            icon: ShieldCheck,
            title: "گارانتی معتبر",
            description: "18 ماه گارانتی معتبر"
        },
    ];

    return (
        <div className='flex items-center gap-1.5 w-full bg-white rounded-2xl h-25 divide-x divide-primary-300 shadow-card-md '>
            {features.map((feature, index) => {
                const Icon = feature.icon;

                return (

                    <div className="flex items-center justify-center gap-4 w-full">
                        <Icon
                            className="size-11 text-primary-500"
                            strokeWidth={1.3}
                        />

                        <div className="flex flex-col gap-1">
                            <h1 className='font-bold'>{feature.title}</h1>
                            <p className='text-xs'>{feature.description}</p>
                        </div>
                    </div>
                )

            }
            )}

        </div>
    )
}

export default BenefitsBar