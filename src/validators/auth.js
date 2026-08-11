import { string, trim, z } from 'zod';

export const sendOtpSchema = z.object({
    phone: z
        .string()
        .trim()
        .regex(/^(?:\+98|0)?9\d{9}$/, { message: "شماره موبایل وارد شده معتبر نمی باشد." })
})

export const verifyOtpSchema = z.object({

    phone: z
        .string()
        .trim()
        .regex(/^(?:\+98|0)?9\d{9}$/, { message: "شماره موبایل وارد شده معتبر نمی باشد." }),

    otp: z
        .string()
        .trim()
        .length(4, { message: "کد تایید باید 4 رقم باشد" })
})