import { Link } from "react-router";
import { useAuth } from "../Hooks/useAuth";
import { MessageCircleCheck, Phone, SendHorizontal, ShieldCheck } from "lucide-react";
import Button from "../Components/Ui/‌Btn";
import Input from "../Components/Ui/Input";

const LoginPage = () => {

    const {
        phone,
        otp,
        isOtpSent,
        handlePhoneChange,
        handleOtpChange,
        handleSubmit,
        resendOtp,
        getFormattedTime,
        isExpired
    } = useAuth()


    return (
        <form
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            {/* form header */}
            <header className="text-center flex items-center justify-center flex-col gap-2">
                <h1 className="font-bold text-zinc-700 text-xl">
                    {" "}
                    <span className="text-primary-500">ثبت‌ نام</span>
                    {" "}
                    یا
                    {" "}
                    <span className="text-primary-500">ورود</span>
                    {" "}
                    به حساب کاربری
                </h1>

                <div className="flex font-medium items-center gap-1 text-sm text-neutral-500">
                </div>
            </header>
            {/* main */}
            <main className="flex-center flex-col  gap-3">

                {!isOtpSent ?
                    <>
                        {/* icon */}
                        <div className="flex-center size-15 bg-primary-50 text-primary-500 rounded-full">
                            <Phone />
                        </div>
                        {/* phone Input */}
                        <p className="text-sm font-bold">
                            لطفا شماره موبایل خود را وارد کنید
                        </p>
                        <p className="text-xs text-secondary-500">
                            کد تایید به این شماره ارسال خواهد شد
                        </p>

                        <Input
                            value={phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            name="phone"
                            type="tel"
                            placeholder="۰۹۱۲۲۳۴۵۶۷۸"
                            icon={<Phone size={18} />}
                            textAlign="left"
                            iconPosition="left"
                        />

                    </>

                    :
                    <>
                        <div className="flex flex-col items-center justify-center gap-3">

                            {/* icon */}
                            <div className="flex-center size-15 bg-primary-50 text-primary-500 rounded-full">
                                <MessageCircleCheck />
                            </div>
                            {/* phone Input */}
                            <p className="text-sm font-bold">
                                لطفا کد تایید را وارد کنید
                            </p>
                            <p className="text-xs text-secondary-500">
                                کد تایید به شماره XXX ارسال شد
                            </p>

                            {/* otp Input */}
       
                            <Input
                                 value={otp}
                                onChange={(e) => handleOtpChange(e.target.value)}

                                name="otp"
                                type="text"
                                placeholder="کد تایید"
                                icon={<Phone size={18} />}
                                textAlign="center"
                                iconPosition="left"
                            />

                        </div>
                        <div className="mt-3 text-center">
                            {isExpired ? (
                                <button
                                    type="button"
                                    onClick={resendOtp}
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    ارسال مجدد کد
                                </button>
                            ) : (
                                <p className="text-xs text-neutral-500">
                                    اعتبار کد تا{" "}
                                    <span className="font-medium">{getFormattedTime()}</span>
                                </p>
                            )}
                        </div>
                    </>
                }

            </main>

            {/* form Footer - btn */}
            <footer className="space-y-3 flex items-center justify-center flex-col">
                <Button
                    type="submit"
                    variant="dark"
                    className={"w-full"}
                    icon={isOtpSent ? <ShieldCheck /> : <SendHorizontal className="rotate-180" />}
                    iconSize={"md"}
                    iconPosition={isOtpSent ? "right" : "left"}
                    iconHover={isOtpSent ? "scale" : "translate"}
                    disabled={isExpired && isOtpSent}
                >
                    {isOtpSent ? "ثبت کد" : "ارسال کد تایید"}
                </Button>




                <div className="space-y-1 text-center mt-4">
                    <p className="text-center text-xs text-zinc-500">
                        ورود به منزله پذیرش{" "}
                        <span className="text-primary-500">
                            شرایط و قوانین
                        </span>{" "}
                        تکنولند است.
                    </p>
                    <Link
                        className="text-primary-500 text-center mx-auto max-w-max! text-xs"
                        to={"/"}
                    >
                        بازگشت
                    </Link>
                </div>




            </footer>
        </form>
    );
};

export default LoginPage;
