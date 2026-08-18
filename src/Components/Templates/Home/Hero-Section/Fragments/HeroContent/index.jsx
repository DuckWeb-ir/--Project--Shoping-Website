import React from 'react'
import Button from '../../../../../Ui/‌Btn'
import { BadgeCheck, Box, ChevronLeft, StepBack, ThumbsUp } from 'lucide-react'
import HeroBenefitItem from './Fragments/HeroBenefitsItem';

function HeroContent() {

    const benefits = [
        {
            id: 1,
            icon: ThumbsUp,
            value: "۹۸٪+",
            title: "رضایت مشتری",
        },
        {
            id: 2,
            icon: BadgeCheck,
            value: "۵۰+",
            title: "برند معتبر",
        },
        {
            id: 3,
            icon: Box,
            value: "۲۰۰۰+",
            title: "محصول",
        },
    ];



    return (
        <div className=' h-full w-1/2 flex items-center justify-center text-white '>
            <div className="flex flex-col  gap-5  h-full  justify-center ">
                <p className="relative flex items-center gap-1.5 text-sm  before:mr-2 before:block before:h-1 before:w-5 before:bg-primary-500 before:rounded-full ">
                    مرجع تخصصی محصولات دیجیتال
                </p>                <h1 className='flex flex-col  font-extrabold text-5xl leading-15 w-120'>
                    <span>آینده تکنولوژی را</span>
                    <span>همین امروز تجربه کنید</span>
                </h1>
                <p className='flex flex-col gap-2 '>
                    <span>جدیدترین محصولات دیجیتال و گجت‌های هوشمند</span>
                    <span>  برای کسانی که همیشه یک قدم جلوترند </span>
                </p>

                <div className="flex flex-col w-87  justify-between gap-10">

                    <div className="flex gap-2 ">
                        <Button icon={<ChevronLeft />} iconPosition='left' iconHover='translate' variant='dark' size='xl'>جدیدترین‌ها</Button>
                        <Button icon={<ChevronLeft />} iconPosition='left' iconHover='translate' variant='primary' size='xl'>مشاهده محصولات</Button>
                    </div>

                    <div className="flex items-center justify-around gap-0.5">
                        {benefits.map((item) => (
                            <HeroBenefitItem
                                key={item.id}
                                icon={item.icon}
                                value={item.value}
                                title={item.title}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroContent