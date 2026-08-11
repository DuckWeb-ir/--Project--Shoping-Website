import { z } from 'zod';

export const contactUsSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "نام و نام خانوادگی باید حداقل 3 کاراکتر باشد." })
        .max(50, { message: "نام و نام خانوادگی باید حداکثر 50 کاراکتر باشد." }),

    phone: z
        .string()
        .trim()
        .regex(/^(?:\+98|0)?9\d{9}$/, { message: "شماره موبایل وارد شده معتبر نمی باشد." }),


    subject: z
        .string()
        .trim()
        .min(3, { message: "موضوع پیام باید حداقل 3 کاراکتر باشد." })
        .max(100, { message: "موضوع پیام باید حداکثر 100 کاراکتر باشد." }),


    content: z
        .string()
        .trim()
        .min(10, { message: "محتوای پیام باید حداقل 10 کاراکتر باشد." })
        .max(1000, { message: "محتوای پیام باید حداکثر 1000 کاراکتر باشد." }),

})