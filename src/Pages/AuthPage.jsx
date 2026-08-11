import { Link } from "react-router";
import { useAuth } from "../Hooks/useAuth";

const LoginPage = () => {

    const {
        phone,
        otp,
        isSentOtp,
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
                <h1 className="font-bold text-zinc-700 text-xl">خوش برگشتید.</h1>

                <div className="flex font-medium items-center gap-1 text-sm text-neutral-500">
                    <span>ثبت‌نام یا ورود</span>
                </div>
            </header>
            {/* main */}
            <main className="space-y-3">

                {!isSentOtp ?
                    <>
                        {/* phone Input */}
                        <p className="text-xs font-normal text-neutral-600">
                            لطفا شماره موبایل خود را وارد کنید
                        </p>
                        <input
                            className="auth-input"
                            dir="ltr"
                            placeholder="09123456789"
                            value={phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                        />
                    </>

                    :
                    <>
                        <div className="flex items-center justify-center gap-1">
                            {/* otp Input */}
                            <input
                                className="auth-input text-center"
                                type="text"
                                dir="ltr"
                                placeholder="کد تایید"
                                value={otp}
                                onChange={(e) => handleOtpChange(e.target.value)}
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
                <button 
                className={`h-10 text-sm flex items-center w-full duration-150 hover:bg-blue-600/80 cursor-pointer justify-center bg-blue-600 text-white rounded-lg focus-within:ring-4 ring-blue-500/40 active:scale-100! hover:scale-103 hover:shadow-lg shadow-blue-500/30 
                  ${isExpired && isSentOtp && "opacity-50 cursor-not-allowed"}
                     
                `}
                disabled={isExpired && isSentOtp}
                >
                    {isSentOtp ? 'ثبت کد' : ' ارسال کد'}
                </button>
                <div className="space-y-1 text-center mt-4">
                    <p className="text-center text-xs text-zinc-500">
                        شما با ثبت نام قوانین وبسایت را قبول می‌کنید.
                    </p>
                    <Link
                        className="text-blue-500 text-center mx-auto max-w-max! text-xs"
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
