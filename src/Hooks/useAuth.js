import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import * as AuthService from '../Services/auth.service'
import { validator } from "../validators";
import { sendOtpSchema, verifyOtpSchema } from "../validators/auth";
import { toast } from "sonner";
import useCountDown from "./useCountDown";
import AuthContext from "../context/authContext";

export const useAuth = () => {

    const navigate = useNavigate()

    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setisOtpSent] = useState(false);

    const { getFormattedTime, restartTimer, isExpired } = useCountDown(120)

    const { refreshUser } = useContext(AuthContext)


    const handlePhoneChange = (value) => {
        setPhone(value)
    };
    const handleOtpChange = (value) => {
        setOtp(value)
    };

    // 2.1
    const sendOtp = async () => {

        if (!validator(sendOtpSchema, { phone })) return

        const data = await AuthService.sendOtpCode(phone)
        console.log("SendOtp:", data);

        setisOtpSent(true)

        restartTimer()

    }

    const resendOtp = async () => {

        const data = await AuthService.sendOtpCode(phone)
        console.log("SendOtp:", data);

        setisOtpSent(true)

        restartTimer()

        toast("کد جدید ارسال شد ")
    }

    const verifyOtp = async () => {

        if (!validator(verifyOtpSchema, { phone, otp })) return

        const data = await AuthService.verifyOtpCode(phone, otp)

        // console.log("verifyOtp :", data);

        return data
    }

    // 2.2
    const login = async () => {
        const data = await verifyOtp()

        if (!data) return

        //saveToken
        toast.success(" با موفقیت وارد شدید ")


        await refreshUser()
        navigate("/")
    };

    // 1
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            if (isOtpSent) {
                await login()

            } else {
                await sendOtp()
            }

        } catch (erorr) {
            console.error(erorr);
        }
    };




    return {
        phone,
        otp,
        isOtpSent,
        handlePhoneChange,
        handleOtpChange,
        handleSubmit,
        resendOtp,
        getFormattedTime,
        isExpired
    };
};
