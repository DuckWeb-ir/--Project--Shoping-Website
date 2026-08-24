import { ChevronLeft, Clock, GlobeCheck, Map, MapPin, MapPinned, MessageCircleOff, MessageCircleQuestionMark, MessageSquareX, Navigation, Phone, Send, UserRound } from 'lucide-react'
import React from 'react'
import Input from '../Ui/Input'
import Textarea from '../Ui/Textarea'
import Button from '../Ui/‌Btn'
import SectionTitle from '../Common/SectionTitle'
import Maps from './Maps'

import contactusImg from '../../../public/assets/static/contactus.png'

function Contact() {
    return (
        <div className='container mt-20 '>


            {/* Header */}
            <div className="flex-ic justify-between w-full py-2 px-10 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 rounded-2xl">
                {/* Header content */}
                <div className="flex-center flex-col gap-5 w-110">
                    <h2 className='font-extrabold text-4xl '>با ما در ارتباط باشید</h2>
                    <div className="w-10 h-0.5 bg-primary-500"></div>
                    <div className="text-center ">
                        تیم پشتيبانى تكنولند هميشه آماده باسخگویی به سوالات و اریه
                        بهترين راه حل ها براى شماست.
                    </div>
                </div>
                {/* img */}
                <div className="w-80 flex-center">
                    <img src={contactusImg} alt="" />
                </div>
            </div>


            {/* Main  */}

            <div className="">

                {/* راه های ارتباط غیر حضوری */}
                <div className="flex gap-10 mt-10 ">
                    {/* Message form */}
                    <div className=" w-1/2 rounded-2xl shadow-card-md p-10 bg-white">
                        {/* card header */}
                        <div className="flex-center flex-col gap-3">
                            <div className="flex-center gap-2">
                                <Send className='text-primary-500' />
                                <div className="font-bold text-lg "> پیام خود را همین جا براى ما ارسال كنيد </div>
                            </div>
                            <p className='text-sm w-105 text-secondary-500 text-center'>
                                سوال  پیشنهاد یا انتقاد دارید ؟ پیام خود را ارسال کنید ما در سریع ترین زمان با شما تماس میگیریم
                            </p>
                        </div>
                        {/* card Form */}
                        <form className="flex flex-col mt-10 gap-4 ">

                            <div className="flex gap-2">
                                <Input
                                    name={name}
                                    label="نام و نام خانوادگی"
                                    placeholder="احمد خمیس آبادی"
                                    icon={<UserRound />}
                                />

                                <Input
                                    label="شماره موبایل"
                                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                                    icon={<Phone />}
                                    textAlign='left'
                                />

                            </div>
                            <Input
                                label="موضوع پیام"
                                placeholder="مثلا : مرجوع کردن کالا "
                                icon={<MessageCircleQuestionMark />}
                            />

                            <Textarea
                                label="متن پیام شما"
                                placeholder="محتوای پیام خود را مفصل شرح دهید ..."
                            />


                            {/* Submit/Cancel BTN */}
                            <div className="flex gap-2">
                                <Button
                                    variant='dark'
                                    icon={<Send />}
                                    className="self-start"
                                >
                                    ارسال پیام
                                </Button>          <Button
                                    variant='cancel'
                                    icon={<MessageCircleOff />}
                                    className="self-start"
                                >
                                    لغو ارسال
                                </Button>
                            </div>

                        </form>


                    </div>


                    {/* contact Way */}
                    <div className="w-1/2 rounded-2xl shadow-card-md p-10 bg-white">

                        {/* card header */}
                     
                            <div className="flex-center gap-1.5 mb-3">
                                <GlobeCheck className='text-primary-500' />
                                <div className="font-bold text-lg "> ارتباط غیرحضوری </div>
                            </div>
                 

                        {/* 1 */}
                        <div className="grid grid-cols-4 gap-2">
                            <div className="    shadow-card-md border border-secondary-100 rounded-xl overflow-hidden">
                                <div className="flex-center flex-col gap-2 p-5">
                                    <div className="size-15 rounded-full flex-center bg-primary-50 text-primary-600">
                                        <Phone />
                                    </div>
                                    <h3 className='text-lg font-bold' >تماس تلفنی </h3>
                                    <h3 className='text-lg font-bold text-primary-500' >۰۲۱-۲۳۴۵۶۷۸</h3>
                                    <p className='text-xs text-secondary-500'>همه روزه از ۸ صبح تا ۱۸ </p>
                                </div>
                                <div className="flex-center gap-1 w-full h-10 bg-primary-50 border border-primary-100 text-primary-500">
                                    <Phone size={12} />
                                    <p className='text-sm'>تماس بگیرید</p>
                                    <ChevronLeft size={15} />
                                </div>
                            </div>
                            <div className="   shadow-card-md border border-secondary-100 rounded-xl overflow-hidden">
                                <div className="flex-center flex-col gap-2 p-5">
                                    <div className="size-15 rounded-full flex-center bg-primary-50 text-primary-600">
                                        <Phone />
                                    </div>
                                    <h3 className='text-lg font-bold' >ایمیل </h3>
                                    <h3 className='text-lg font-bold text-primary-500' >info@technoland.ir</h3>
                                    <p className='text-xs text-secondary-500'> پاسخگو در کمتر از ٢۴ ساعت</p>
                                </div>
                                <div className="flex-center gap-1 w-full h-10 bg-primary-50 border border-primary-100 text-primary-500">
                                    <Phone size={12} />
                                    <p className='text-sm'>ارسال ايميل</p>
                                    <ChevronLeft size={15} />
                                </div>
                            </div>
                            <div className="   shadow-card-md border border-secondary-100 rounded-xl overflow-hidden">
                                <div className="flex-center flex-col gap-2 p-5">
                                    <div className="size-15 rounded-full flex-center bg-primary-50 text-primary-600">
                                        <Phone />
                                    </div>
                                    <h3 className='text-lg font-bold' >واتساپ</h3>
                                    <h3 className='text-lg font-bold text-primary-500' >0912 123 4567</h3>
                                    <p className='text-xs text-secondary-500'>پاسخکوی سریع در واتساپ </p>
                                </div>
                                <div className="flex-center gap-1 w-full h-10 bg-primary-50 border border-primary-100 text-primary-500">
                                    <Phone size={12} />
                                    <p className='text-sm'>چت در واتساب</p>
                                    <ChevronLeft size={15} />
                                </div>
                            </div>
                            <div className="   shadow-card-md border border-secondary-100 rounded-xl overflow-hidden">
                                <div className="flex-center flex-col gap-2 p-5">
                                    <div className="size-15 rounded-full flex-center bg-primary-50 text-primary-600">
                                        <Phone />
                                    </div>
                                    <h3 className='text-lg font-bold' >چت آنلاین</h3>
                                    <h3 className='text-lg font-bold text-primary-500' >شروع كفت وكو</h3>
                                    <p className='text-xs text-secondary-500'>پاسخ فوری در چت آنلاین </p>
                                </div>
                                <div className="flex-center gap-1 w-full h-10 bg-primary-50 border border-primary-100 text-primary-500">
                                    <Phone size={12} />
                                    <p className='text-sm'>كفت وكو را شروع كنيد</p>
                                    <ChevronLeft size={15} />
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

                {/* راه های ارتباط  حضوری */}
                <div className="my-15">

                    <SectionTitle
                        text="شعبه های حضوری "
                        description="شما می‌توانید به صورت حضوری به یکی از دفاتر رسمی تکنولند مراجعه کنید و با همکاران ما در ارتباط باشید."
                        icon={<MapPinned />}
                    />

                    {/* Location Cards */}
                    <div className="flex gap-5">
                        {/* Location card wrapper */}
                        <div className="flex gap-2 w-1/2 bg-white p-5 rounded-2xl shadow-card-md">
                            {/* Location data */}
                            <div className="ml-10">
                                <div className="flex-ic gap-2 mb-2">
                                    <Map className='text-blue-500' />
                                    <h2 className='font-bold text-lg'>شعبه مرکزی تهران</h2>
                                </div>
                                <div className="flex flex-col gap-2 w-60 pr-8">
                                    <div className="flex  text-secondary-500 gap-2">
                                        <MapPin size={28} />
                                        <p>تهران، خیابان ولیعصر، کوچه نسترن، پلاک ۲۴، واحد ۵</p>
                                    </div>
                                    <div className="flex  text-secondary-500 gap-2">
                                        <Phone size={15} />
                                        <p className='font-bold'>۰۲۱-۲۳۴۵۶۷۸</p>
                                    </div>
                                    <div className="flex  text-secondary-500 gap-2">
                                        <Clock size={15} />
                                        <p className=''>شنبه تا پنجشنبه : ۹ تا ۲۱ <br /> جمعه : ۹ تا ۱۸</p>
                                    </div>
                                    <Button
                                        className={"mt-2 "}
                                        icon={<Navigation />}
                                    >
                                        مشاهده در نقشه گوگل
                                    </Button>
                                </div>
                            </div>
                            {/* Location Map */}
                            <div className=" size-full border border-secondary-300 rounded-2xl overflow-hidden">
                                <Maps position={[38.04238655623606, 46.33910896342169]} popup={"دفتر تکنولند - شعبه"} />
                            </div>
                        </div>
                        <div className="flex gap-2 w-1/2 bg-white p-5 rounded-2xl shadow-card-md">
                            {/* Location data */}
                            <div className="ml-10">
                                <div className="flex-ic gap-2 mb-2">
                                    <Map className='text-blue-500' />
                                    <h2 className='font-bold text-lg'>شعبه مرکزی اصفهان</h2>
                                </div>
                                <div className="flex flex-col gap-2 w-60 pr-8">
                                    <div className="flex  text-secondary-500 gap-2">
                                        <MapPin size={28} />
                                        <p>تهران، خیابان ولیعصر، کوچه نسترن، پلاک ۲۴، واحد ۵</p>
                                    </div>
                                    <div className="flex  text-secondary-500 gap-2">
                                        <Phone size={15} />
                                        <p className='font-bold'>۰۲۱-۲۳۴۵۶۷۸</p>
                                    </div>
                                    <div className="flex  text-secondary-500 gap-2">
                                        <Clock size={15} />
                                        <p className=''>شنبه تا پنجشنبه : ۹ تا ۲۱ <br /> جمعه : ۹ تا ۱۸</p>
                                    </div>
                                    <Button
                                        className={"mt-2 "}
                                        icon={<Navigation />}
                                    >
                                        مشاهده در نقشه گوگل
                                    </Button>
                                </div>
                            </div>
                            {/* Location Map */}
                            <div className=" size-full border border-secondary-300 rounded-2xl overflow-hidden">
                                <Maps position={[38.04238655623606, 46.33910896342169]} popup={"دفتر تکنولند - شعبه"} />
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Contact