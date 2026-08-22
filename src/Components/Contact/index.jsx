import { Clock, Map, MapPin, MapPinned, MessageCircleOff, MessageCircleQuestionMark, MessageSquareX, Navigation, Phone, Send, UserRound } from 'lucide-react'
import React from 'react'
import Input from '../Ui/Input'
import Textarea from '../Ui/Textarea'
import Button from '../Ui/‌Btn'
import SectionTitle from '../Common/SectionTitle'
import Maps from './Maps'

function Contact() {
    return (
        <div className='container mt-20 '>


            {/* Header */}
            <div className="flex-ic justify-between w-full px-10">
                {/* Header content */}
                <div className="flex-center flex-col gap-5 w-110">
                    <h2 className='font-extrabold text-4xl'>با ما در ارتباط باشید</h2>
                    <div className="w-10 h-0.5 bg-primary-500"></div>
                    <div className="text-center ">
                        تیم بشتيبانى تكنولتد هميشه آماده باسخگویی به سوالات و اریه
                        بهترين راه حل ها براى شماست.
                    </div>
                </div>
                {/* img */}
                <div className="size-50 bg-primary-400"></div>
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
                    <div className="w-1/2 min-h-110 bg-primary-200">

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
                            <div className=" size-full border border-secondary-600 rounded-2xl overflow-hidden">
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
                            <div className=" size-full border border-secondary-600 rounded-2xl overflow-hidden">
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