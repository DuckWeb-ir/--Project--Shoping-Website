import { useState } from "react";
import axios from "axios";
import { toast } from 'sonner'
import { contactUsSchema } from "../validators/contactUs";
import { validator } from "../validators";
import { sendContactUsMessage } from "../Services/contactUs.service";


function useContactUs(initialValue = {}) {


    //loading State
    const [isSubmiting, setIsSubmiting] = useState(false)

    // form state
    const [form, setForm] = useState(initialValue);

    // update form fields
    const changeHandler = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    // reset form fields
    const resetForm = () => { initialValue }


    // submit form
    const submitHandler = async (e) => {
        e.preventDefault()

        if (!validator(contactUsSchema, form)) {
            return
        }

        setIsSubmiting(true)

        const response = sendContactUsMessage(form)

        toast.promise(response, {
            loading: 'در حال ارسال پیام',
            success: () => {
                resetForm()
                setIsSubmiting(false)
                return "پیام شما با موفقیت ارسال شد"
            },
            error: (error) => {
                setIsSubmiting(false)
                return error.response?.data?.message || 'ارسال پیام با شکست رو به رو شد'
            }
        })
    }


    return { form, changeHandler, submitHandler, isSubmiting }


} export default useContactUs





// اکسیوس معمولی
//     const submitHandler = async (e) => {
//     e.preventDefault()

//     try {
//         const res = await axios.post('https://shopino.iran.liara.run/v1/contact-us', form)
//         console.log(res)

//         if (res.data.status === 201) {
//             toast.success("پیام شما با موفقیت ارسال شد");
//         }

//     } catch (error) {
//         console.log(error.response?.data?.message);
//     }

// }
